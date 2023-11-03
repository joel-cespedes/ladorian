
import { Story, Meta, moduleMetadata } from '@storybook/angular';

import { LadorianSliderComponent } from './ladorian-slider.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';


export default {
    title: "Components/lodorianSlider",
    component: LadorianSliderComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule]
        }),
    ],

} as Meta;

const Template: Story<LadorianSliderComponent> = (args: LadorianSliderComponent) => ({
    component: LadorianSliderComponent,
    props: args,
});

export const Slider = Template.bind({});
Slider.args = {
    images: ['slider1.png'],
};

