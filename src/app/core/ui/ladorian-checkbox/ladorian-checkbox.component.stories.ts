
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { LadorianCheckboxComponent } from './ladorian-checkbox.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


export default {
    title: "Components/LorianCheckbox",
    component: LadorianCheckboxComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        }),
    ],

} as Meta;

const Template: Story<LadorianCheckboxComponent> = (args: LadorianCheckboxComponent) => ({
    component: LadorianCheckboxComponent,
    props: args,
});

export const seleccionado = Template.bind({});
seleccionado.args = {
    label: 'Seleccionado',
    value: true
};

export const noSelect = Template.bind({});
noSelect.args = {
    label: 'no seleccionado',
    value: false
};

