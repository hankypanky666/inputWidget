class InputWidget {
    constructor(options) {
        this._el = options.element;
        this._input = this._el.querySelector('#qtyRooms');
        this._roomsEl = options.roomsElement;

        //set value
        this._input.setAttribute('aria-valuenow', this._input.value);

        this._el.addEventListener('click', this._changeRooms.bind(this));
    }

    _changeRooms(e) {
        if (e.target.hasAttribute('data-add-room')) {
            this._input.setAttribute('aria-valuenow', +this._input.getAttribute('aria-valuenow') + 1);
            this._input.value = this._input.getAttribute('aria-valuenow');

            this._addInputElement(this._input.getAttribute('aria-valuenow'));
        }

        if (e.target.hasAttribute('data-remove-room')) {
            if(+this._input.getAttribute('aria-valuenow') > 0) {
                this._input.setAttribute('aria-valuenow', +this._input.getAttribute('aria-valuenow') - 1);
                this._input.value = this._input.getAttribute('aria-valuenow');

                this._removeInputElement();
            }
        }
    }

    _addInputElement(index) {
        this._roomsEl.style.display = '';

        let inputField = document.createElement('input');
        inputField.value = `A${index}`;
        inputField.name = `number[${index}]`;

        this._roomsEl.appendChild(inputField);
    }

    _removeInputElement() {
        let room = this._roomsEl.lastElementChild;
        this._roomsEl.removeChild(room);
    }
}