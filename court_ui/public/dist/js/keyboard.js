var court_ui=(()=>{frappe.provide("court_ui.utils.keyboard");court_ui.utils.keyboard={shortcuts:{},register:(t,u,r)=>{court_ui.utils.keyboard.shortcuts[t]={callback:u,description:r}},init:()=>{document.addEventListener("keydown",t=>{let u=`${t.ctrlKey?"ctrl+":""}${t.shiftKey?"shift+":""}${t.key}`,r=court_ui.utils.keyboard.shortcuts[u];r&&(t.preventDefault(),r.callback())})}};})();