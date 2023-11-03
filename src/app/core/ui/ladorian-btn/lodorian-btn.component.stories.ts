
import {  Story, Meta, moduleMetadata } from '@storybook/angular';

import { LadorianBtnComponent } from './ladorian-btn.component';
import { CommonModule } from '@angular/common';


export default {
    title: "Components/LadorianBtn",
    component: LadorianBtnComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, LadorianBtnComponent],
        }),
    ],
    args: {
        action: 'summit',
        color: 'primary',
        type: 'default'
    }
} as Meta;

const Template: Story<LadorianBtnComponent> = (args: LadorianBtnComponent ) => ({
    component: LadorianBtnComponent,
    props: args,
    template: `
        <ladorian-btn type="${args.type}" color="${args.color}">Ladorian</ladorian-btn>
    `,
});

export const Filled = Template.bind({});
Filled.args = {
    color: 'primary',
    action: 'summit',
    type: 'filled'
};

export const customDefault = Template.bind({});
customDefault.args = {
    color: 'primary',
    action: 'summit',
    type: 'default'
};

export const secondary = Template.bind({});
secondary.args = {
    color: 'secondary',
    action: 'summit',
    type: 'filled'
};
