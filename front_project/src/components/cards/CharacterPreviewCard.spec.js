/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import CharacterPreview from './src/components/cards/CharacterPreviewCard.vue';

describe('check CharacterPreviewCard', () => {
    const propsTestData = {
        "Avatar": "https:\/\/img2.finalfantasyxiv.com\/f\/5b99cd8dd0208c7aba0e8f5c66f83f94_c33f640c0cdd35f7def85b8aa31a0007fc0_96x96.jpg?1673535638",
        "ID": 45663480,
        "Lang": "FR",
        "Name": "Pinkuy Pingu",
        "Server": "Twintania"
    };

    it('should be render with it\'s props values', () => {
        const wrapper = mount(CharacterPreview, {
            propsData: {
                "Avatar": "https:\/\/img2.finalfantasyxiv.com\/f\/5b99cd8dd0208c7aba0e8f5c66f83f94_c33f640c0cdd35f7def85b8aa31a0007fc0_96x96.jpg?1673535638",
                "ID": 45663480,
                "Lang": "FR",
                "Name": "Pinkuy Pingu",
                "Server": "Twintania"
            }
        });
        expect(wrapper.find('.characterPreview__avatar').element.getAttribute('src')).toBe(propsTestData.Avatar)
        expect(wrapper.find('.characterPreview__avatar').element.getAttribute('alt')).toBe(`Image of ${propsTestData.Name}`)
        expect(wrapper.find('.characterPreview__lang').element.textContent).toBe(propsTestData.Lang)
        expect(wrapper.find('.characterPreview__name').element.textContent).toBe(propsTestData.Name)
        expect(wrapper.find('.characterPreview__server').element.textContent).toBe(propsTestData.Server)
    })
})