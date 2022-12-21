/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Jobs from './index.vue';

describe('Test jobs page', () => {
    it('Should contain Jobs title', () => {
        const wrapper = mount(Jobs);
        expect(wrapper.find('h1').element.textContent).toBe('Jobs');
    })

    /*
     * Here we check if the ClassLine component is displayed and if the fetch from the api works
     * I am using the Gladiator class raw data, but since this is an api the infos might change so it is not the best solution here
     */
    it('Should contain one job from the final fantasy XIV game', () => {
        const wrapper = mount(Jobs);
        expect(wrapper.find('.class_line__name').element.textContent).toBe("Paladin")
        expect(wrapper.find('.class_line__icon').element.getAttribute('src')).toBe("/cj/1/paladin.png")
        expect(wrapper.find('.class_line__icon').element.getAttribute('alt')).toBe("Paladin class icon")
        expect(wrapper.find(`router-link[to="/classes/19]`).exists()).toBeTruthy()
    })
})