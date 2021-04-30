function changeOuterLinks() {

    //kivalasztom a <nav id="link-list">
    const navElements = document.querySelectorAll('nav#link-list a');
    //vegigmegyek rajta
    navElements.forEach(element => {
        if (element.innerHTML.includes('outer-link')) {
            element.target ='_blank';
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    })
    //testbol kicopy-zom az elvartakat
    document.querySelectorAll("nav").forEach((e) => {
        e.style.display = "flex";
        e.style.flexDirection = "column";
        e.style.margin = "0px auto";
        e.style.width = "30%";
        e.style.border = "1px solid blue";
        e.style.padding = "16px";
      });
    }

export { changeOuterLinks };