const gebi = function (id) { return document.getElementById(id); };
const log = console.log.bind(window.console);

const web = { model: {}, view: {}, controller: {} };

const arrs = 'header,footer,hero,clients,about,stats,services,features,portofolio,pricing,faq,team,call,testimonial,posts,contact,single'.split(',');

for (let i = 0; i < arrs.length; i++) {
    const node = arrs[i];
    web.model[node] = { id: node, data: [] };
    web.view[node] = function (arr) { return arr.id; };
    web.controller[node] = cont(node);
}

function cont(node) {
    return function () {
        const arr = web.model[node];
        const element = gebi(node);
        if (element) {
            element.innerHTML = web.view[node](arr);
        }
    };
}

// Mulai model
web.model = {
    hero: {
        id: 'hero',
        css: 'col-1-3',
        data: [{ id: 1, nama: 'CLIENTS', isi: 10, icon: 'eye' }],
    }
};

// Panggil controller setelah DOM siap
document.addEventListener('DOMContentLoaded', function () {
    arrs.forEach(node => {
        if (web.controller[node]) {
            web.controller[node]();
        }
    });
});
