var court_ui=(()=>{frappe.provide("court_ui.utils.animations");court_ui.utils.animations={fadeIn:(t,s=200)=>{t.style.opacity=0,t.style.transition=`opacity ${s}ms`,setTimeout(()=>t.style.opacity=1,10)},slideIn:(t,s="right",a=200)=>{let i={right:"translateX(20px)",left:"translateX(-20px)",up:"translateY(-20px)",down:"translateY(20px)"};t.style.transform=i[s],t.style.opacity=0,t.style.transition=`all ${a}ms cubic-bezier(0.4, 0, 0.2, 1)`,setTimeout(()=>{t.style.transform="translate(0)",t.style.opacity=1},10)}};})();