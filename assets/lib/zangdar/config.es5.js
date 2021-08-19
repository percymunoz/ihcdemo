'use strict';

function buildStepsBreadcrumb(wizard, element, steps) {
    var $steps = document.getElementById(element);
    $steps.innerHTML = '';

    var _loop = function (label) {
        if (steps.hasOwnProperty(label)) {
            var $li = document.createElement('li');
            var $a = document.createElement('a');
            $li.classList.add('step-item');
            if (steps[label].active) {
                $li.classList.add('active');
            }
            $a.setAttribute('href', '#');
            $a.classList.add('tooltip');
            $a.dataset.tooltip = label;
            $a.innerText = label;
            $a.addEventListener('click', function (e) {
                e.preventDefault();
                wizard.revealStep(label);
            });
            $li.appendChild($a);
            $steps.appendChild($li);
        }
    };

    for (var label in steps) {
        _loop(label);
    }
}

