/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import JobDetails from './[id].vue';

describe('Test job details page', () => {
    it('Should contain the job details', () => {
        console.log('esdfdsf')
        const wrapper = mount(JobDetails);
        console.log(wrapper.find('#testing').element)
        expect(wrapper.find('.class_line__name').element.textContent).toBe("Paladin")
        expect(wrapper.find('.class_line__icon').element.getAttribute('src')).toBe("/cj/1/paladin.png")
        expect(wrapper.find('.class_line__icon').element.getAttribute('alt')).toBe("Paladin class icon")
        expect(wrapper.find(`router-link[to="/classes/19]`).exists()).toBeTruthy()
    })
})