import { applicationConfig, type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

import { ButtonStrComponent } from './button-str.component';
import { CommonModule } from '@angular/common';
import { DataBuilder, Str2Module, TestInput } from '@storybook/str2';
import { importProvidersFrom, Injector } from '@angular/core';
import { injectInjectorToProps } from '../services/inject-props';
import { action } from '@storybook/addon-actions';
import { argsToTemplate } from '@storybook/angular';

export const actionsData = {
  onClicked: action('onClicked')
};

const meta: Meta<ButtonStrComponent> = {
  component: ButtonStrComponent,
  title: 'MyButtonComponent',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, Str2Module]
    }),
    applicationConfig({
      providers: [importProvidersFrom(Str2Module)]
    }),
    // use your injector here !!
    injectInjectorToProps(),
  ],
  render: (args: ButtonStrComponent) => ({
    props: {
      ...args,
      // data:  {
      //   name: 'Click mex',
      //   padding: 10
      // },
      // disabled: false,
      onClicked: actionsData.onClicked,
      // getPropData: (injector: Injector) => {
      //   console.log('jestem2')
      //   // the injector is provided by the template and all services are now available
      //   return injector.get(DataBuilder).getData();
      // }
    },
    template: `<storybook-button-str ${argsToTemplate(args)}>/<storybook-button-str>`
  })
};
// <!-- <storybook-button-str [data]="getPropData(injector)" [disabled]="false">/<storybook-button-str> -->


// const template: StoryObj<ButtonStrComponent> = {
//   render: (args: ButtonStrComponent) => ({
//     props: {
//       ...args,
//       data:  {
//         name: 'Click mex',
//         padding: 10
//       },
//       disabled: false,
//       clicked: actionsData.clicked,
//       // getPropData: (injector: Injector) => {
//       //   console.log('jestem2')
//       //   // the injector is provided by the template and all services are now available
//       //   return injector.get(DataBuilder).getData();
//       // }
//     },
//     template: `
//       <!-- Because the injector is part of the props, you can provide it to your function -->
//       <!-- <storybook-button-str [data]="getPropData(injector)" [disabled]="false">/<storybook-button-str> -->
//       <storybook-button-str ${argsToTemplate(args)}">/<storybook-button-str>
//     `
//   })
// };

export default meta;
type Story = StoryObj<ButtonStrComponent>;

export const Primary: Story = {
  name: 'Moje story',
  args: {
    data: {
      name: 'Click me2',
      padding: 10
    },
    disabled: false
  }
};

// export const Heading: Story = {
//   args: {
//     data: prepareArgs(),
//     disabled: false,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Click me/)).toBeTruthy();
//     expect(canvas.getByText(/Click me/)).toBeTruthy();
//     console.log('test')
//   },
// };

// export const Heading2: Story = {
//   args: {
//     text: 'Click me!',
//     padding: 10,
//     disabled: false,
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Click me/gi)).toBeTruthy();
//   },
// };
