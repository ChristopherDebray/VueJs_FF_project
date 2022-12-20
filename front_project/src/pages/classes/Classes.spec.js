/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Classes from './index.vue';

describe('Test homepage', () => {
    it('Should contains Classes title', () => {
        const wrapper = mount(Classes);
        expect(wrapper.find('h1').element.textContent).toBe('Classes');
    })

    // Here we check if the ClassLine component is displayed and if the fetch from the api works
    it('Should contain one class from the final fantasy XIV game', () => {
        const wrapper = mount(Classes);
        expect(wrapper.find('.class_line__name').element.textContent).toBe(data.className)
        expect(wrapper.find('.class_line__icon').element.getAttribute('src')).toBe(data.classIconUrl)
        expect(wrapper.find('.class_line__icon').element.getAttribute('alt')).toBe(`${data.className} class icon`)
        expect(wrapper.find(`router-link[to="/classes/${data.classId}"]`).exists()).toBeTruthy()
    })
})