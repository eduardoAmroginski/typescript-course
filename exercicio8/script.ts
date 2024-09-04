// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const button = document.getElementById("btn-mobile");

function toggleMenu(event: PointerEvent){
    const element = event.currentTarget;
    const nav = document.getElementById("nav");
    console.log(element, nav)

    if(element instanceof HTMLElement && nav){
      const active = nav.classList.contains('active');

      if(active){
        nav.classList.remove("active");
        element.ariaExpanded = "false";
        element.ariaLabel = "Abrir Menu";
      }else{
        nav.classList.add("active");
        element.ariaExpanded = "true";
        element.ariaLabel = "Fechar Menu";
      }
    }
}

button?.addEventListener("pointerdown", toggleMenu);