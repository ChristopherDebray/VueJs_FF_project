/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Searchbar from './src/components/form/Searchbar.vue';

describe('check Searchbar component', () => {
    it('should be render with it\'s default values', () => {
        const wrapper = mount(Searchbar);
        expect(wrapper.find('input').element.value).toBe('')
        expect(wrapper.find('input').element.placeholder).toBe('Type your search here')
        expect(wrapper.find('input').element.id).toBe('searchBar')
    })

    it('should be render with it\'s props values', () => {
        const wrapper = mount(Searchbar, {
            propsData: {
                inputValue: 'test',
                placeholder: 'test',
                serachBarId: 'test'
            }
        });
        expect(wrapper.find('input').element.value).toBe('test')
        expect(wrapper.find('input').element.placeholder).toBe('test')
        expect(wrapper.find('input').element.id).toBe('test')
    })
})