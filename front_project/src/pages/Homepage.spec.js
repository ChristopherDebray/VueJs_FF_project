/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Homepage from './index.vue';

describe('Test homepage', () => {
    it('Should contains Homepage title', () => {
        const wrapper = mount(Homepage);
        expect(wrapper.find('h1').element.textContent).toBe('Homepage')
    })
})