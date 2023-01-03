/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Jobs from './index.vue';

describe('Test jobs page', () => {
    it('Should contain one job from the final fantasy XIV game', async () => {
        const JobsComponent = defineComponent({
            components: { Jobs },
            template: '<Suspense><Jobs/></Suspense>'
        })
        const wrapper = mount(JobsComponent);

        expect(wrapper.html()).toBe('<div><p>Foo</p></div>')

        console.log(wrapper.html())

        expect(wrapper.find('.class_line__name').element.textContent).toBe("Paladin")
        expect(wrapper.find('.class_line__icon').element.getAttribute('src')).toBe("/cj/1/paladin.png")
        expect(wrapper.find('.class_line__icon').element.getAttribute('alt')).toBe("Paladin class icon")
        expect(wrapper.find(`router-link[to="/classes/19]`).exists()).toBeTruthy()
    })
})