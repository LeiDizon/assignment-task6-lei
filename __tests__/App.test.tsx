import React from 'react';
import { render } from '@testing-library/react-native';
import AppStack from '../src/routes/AppStack';

describe('Simple Addition Test', () => {
    it('Adds two numbers', () => {
        expect(2 + 2).toBe(4);
    });
});