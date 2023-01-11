import { describe, expect, test } from '@jest/globals';
import sum from '../sum';
import { render } from '@testing-library/react';
import Table from '../index';
import { columns, data } from '../../../pages';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('Table', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('render table correctly', () => {
    const component = render(<Table columns={columns} data={data} />);
  });
});
