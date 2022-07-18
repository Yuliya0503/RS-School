export default class Input {
    filter() {
        const input = document.getElementById('filter-input');
        input.addEventListener('keyup', function () {
            const filter = (input as HTMLInputElement).value.toLowerCase(),
                filterElements = document.querySelectorAll('.products-element__name');
            filterElements.forEach((item) => {
                if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    (item.parentNode as HTMLElement).style.display = '';
                } else {
                    (item.parentNode as HTMLElement).style.display = 'none';
                }
            });
        });
    }
}
