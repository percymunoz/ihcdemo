function buildStepsBreadcrumb(wizard, element, steps) {
    const $form = wizard.getFormElement();
    const $steps = $form.querySelectorAll(".steps .step");
    $steps.forEach(function ($step) {
        let stepName = $step.querySelector("a").dataset.stepHref;
        const GoToStep = (e) => {
            e.preventDefault();
            wizard.revealStep(stepName);
        };
        $step.classList.add('step')
        $step.classList.remove('step-active')
        if (steps[stepName].active) {
            $step.classList.add('step-active')
        }
        $step.addEventListener('click', GoToStep)
    });
    //const $steps = document.getElementById(element)
    //$steps.innerHTML = ''
    //for (let label in steps) {
    //    if (steps.hasOwnProperty(label)) {
    //        const $li = document.createElement('li')
    //        const $liContent = document.createElement('div')
    //        const $a = document.createElement('a')
    //        $li.classList.add('step')
    //        $liContent.classList.add('step-content')
    //        if (steps[label].active) {
    //            $li.classList.add('step-active')
    //        }
    //        $a.setAttribute('href', '#')
    //        $a.classList.add('tooltip')
    //        $a.dataset.tooltip = label
    //        $a.innerText = label
    //        $a.addEventListener('click', e => {
    //            e.preventDefault()
    //            wizard.revealStep(label)
    //        })
    //        $li.appendChild($liContent)
    //        $liContent.appendChild($a)
    //        $steps.appendChild($li)
    //    }
    //}
}

function onStepChange(wizard, selector) {
    const steps = wizard.getBreadcrumb()
    buildStepsBreadcrumb(wizard, selector, steps)
}

