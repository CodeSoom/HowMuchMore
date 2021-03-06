import React from 'react';

import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('without type', () => {
    function renderTextField() {
      return render((
        <TextField
          label="이름"
          name="name"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      renderTextField();

      expect(screen.getByLabelText(/이름/)).toBeInTheDocument();
    });

    it('renders “text” input control', () => {
      renderTextField();

      expect(screen.getByLabelText('이름').type).toBe('text');
    });
  });

  context('with type', () => {
    function renderTextField() {
      return render((
        <TextField
          label="저축"
          type="number"
          name="monthlySavings"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      renderTextField();

      expect(screen.getByLabelText('저축')).toBeInTheDocument();
    });

    it('renders “number” input control', () => {
      renderTextField();

      expect(screen.getByLabelText('저축').type).toBe('number');
    });
  });

  it('renders value', () => {
    const name = 'currentBalance';
    const value = '10000';

    const { getByLabelText } = render((
      <TextField
        label="잔액"
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));

    expect(getByLabelText('잔액').value).toBe(value);
  });

  it('listens to change events', () => {
    const name = 'age';
    const value = '29';

    render((
      <TextField
        label="age"
        name={name}
        onChange={handleChange}
      />
    ));

    fireEvent.input(screen.getByLabelText('age'), {
      target: {
        value,
      },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
