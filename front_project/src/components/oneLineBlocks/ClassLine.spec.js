/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ClassLine from './ClassLine.vue';

describe('Test class line component', () => {
    it('Should be displayed with the values passed in props', () => {
        const data = {
            'className': 'Test',
            'classIconUrl': 'https://xivapi.com/cj/1//gladiator.png',
            'classId': "test"
        };
        const wrapper = mount(ClassLine, {
            propsData: data
        });

        expect(wrapper.find('.class_line__name').element.textContent).toBe(data.className)
        expect(wrapper.find('.class_line__icon').element.getAttribute('src')).toBe(data.classIconUrl)
        expect(wrapper.find('.class_line__icon').element.getAttribute('alt')).toBe(`${data.className} job icon`)
        expect(wrapper.find(`router-link[to="/jobs/${data.classId}"]`).exists()).toBeTruthy()
    })
})