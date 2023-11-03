
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { LadorianInputComponent } from './ladorian-input.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


export default {
    title: "Components/LorianInput",
    component: LadorianInputComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LadorianInputComponent, FormsModule, NgIf, NgFor, BrowserAnimationsModule],
            providers: [provideAnimations(),]
        }),
    ],

} as Meta;

const Template: Story<LadorianInputComponent> = (args: LadorianInputComponent) => ({
    component: LadorianInputComponent,
    props: args,
});

export const text = Template.bind({});
text.args = {
    type: 'text',
    placeholder: 'Input type text'
};

export const password = Template.bind({});
password.args = {
    type: 'password',
    placeholder: 'Input type password'
};

