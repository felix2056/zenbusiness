//imports functions from /utils/zen-api from the the template

if (!ZenApiUtils) {
	console.warn("zen-api utils are not loading");
}

(function (document) {

	let submitButtons        = document.querySelectorAll("#lead-submit"),
	    leadEmails           = document.querySelectorAll("#lead-email"),
		leadSignupContainers = document.querySelectorAll("#lead-signup-container"),
		leadSignupCompletes  = document.querySelectorAll("#lead-signup-complete"),
		leadErrors           = document.querySelectorAll("#lead-error-message");

	for (let i=0; i < leadEmails.length; i++) {
		submitButtons[i].addEventListener("click", handleSubmit);
		leadEmails[i].addEventListener("keydown", event => {
			if (event.key === 'Enter' || event.code === 'Enter') {
				event.preventDefault();
				submitButtons[i].click();
			} else {
				leadErrors[i].classList.add("invisible");
			}
		});	
	}

	function handleSubmit(event) {
		event.stopPropagation();
		event.preventDefault();
 
		let lead_content, 
			user_type, 
			form = event.target.closest('form');

		if ( form ) {
			lead_content = form.getAttribute('data-lead-content');
			user_type = form.getAttribute('data-user-type');
		}

		let email;
		let nodeNumber;
		for (let i=0; i < submitButtons.length; i++) {
			if (event.target === submitButtons[i]) {
				nodeNumber = i;
				email = leadEmails[nodeNumber].value;
			}
		}

		if (
			//email validation regex
			/^\w{1,99}([\.-]?\w{1,99}){0,99}(\+[a-z0-9-]{1,99})?@\w{1,99}([\.-]?\w{1,99}){0,99}(\.\w{2,10}){1,99}$/.test(email) === true
		) { 
			//build lead to send
			let lead = {
				visit_uuid: ZenApiUtils.getUUID(),
				first_name: "",
				last_name: "",
				email: email,
				phone: "",
				source: ZenApiUtils.getSource,
				selected_state: "",
				searchstate: "",
				searchcontent: "",
				entity_name: "",
				entity_type: "",
				plan_flow: "",
				purchase_flow: "",
				pricing_uuid: "",
				pricing_test: "",
				lead_tracking: {
					device_type: ZenApiUtils.getDeviceType,
					flow_name: "",
					user_type: user_type,
				},
				lead_content: lead_content,
				lead_url: window.location.href,
				lead_medium: "DC_Onsite",
			};
			ZenApiUtils.sendRequest(ZenApiUtils.buildRequest("lead", lead));
			ZenThirdPartyTracking.identify( lead.email );

			leadSignupContainers[nodeNumber].classList.add("hidden");
			leadSignupCompletes[nodeNumber].classList.remove("hidden");	

			// Hide elements after submit if they have specific class
			let lead_container = event.target.closest('.zb-lead-capture-form');
			if (lead_container) {
				let container_id = lead_container.getAttribute('data-container');
				let container = document.getElementById(container_id);
				for (let item_to_hide of container.querySelectorAll('.hide-on-submit')) {
					item_to_hide.classList.add('hidden');
				}
			}

		} else {
			leadErrors[nodeNumber].classList.remove("invisible");
		}
	}
})(document);