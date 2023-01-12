/**
 * @vitest-environment happy-dom
 */
import { describe, expect, it, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

describe('Test job details page', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })

    it('Should contain the job details', () => {
        expect(1).toBe(0)
    })
})
