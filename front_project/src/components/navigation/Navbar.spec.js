/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Navbar from './Navbar.vue';
import mainLinksArray from '../../data/mainlinks.json';

describe('Test navbar component', () => {
    it('Should contains all the links from the mainLinksArray', () => {
        const wrapper = mount(Navbar);
        mainLinksArray.forEach(link => {
            expect(wrapper.find(`router-link[to="${link.href}"]`).exists()).toBeTruthy()
        });
    })
})