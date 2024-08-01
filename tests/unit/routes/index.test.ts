// tests/unit/routes/index.test.ts
import app from '../../../src';
import { test, expect } from 'vitest';

test('GET / should return status OK', async () => {
    const response = await app.inject({
        method: 'GET',
        url: '/api/v1/'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'pong' });
});