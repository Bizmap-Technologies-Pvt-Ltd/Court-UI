var court_ui=(()=>{frappe.provide("court_ui.components");court_ui.components.JudgeCard=class{constructor(s){Object.assign(this,s),this.make()}make(){this.card=document.createElement("div"),this.card.className="judge-card",this.render()}render(){this.card.innerHTML=`
            <img class="judge-avatar" src="${this.image||"/assets/court_ui/images/default-avatar.png"}" alt="${this.name}">
            <div class="judge-info">
                <h3 class="judge-name">${this.name}</h3>
                <p class="judge-title">${this.title}</p>
                <span class="case-count">${this.caseCount} Active Cases</span>
            </div>
        `}};})();
