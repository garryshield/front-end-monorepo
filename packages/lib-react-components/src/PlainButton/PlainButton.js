import { Button } from 'grommet'
import { bool, func, shape, string } from 'prop-types'
import React from 'react'
import styled, { withTheme } from 'styled-components'

import SpacedText from '../SpacedText'

export const StyledPlainButton = styled(Button)`
  &:focus,
  &:enabled:hover {
    text-decoration: underline;
  }
`

function PlainButton (props) {
  const { className, onClick, labelSize, text } = props

  return (
    <StyledPlainButton
      className={className}
      gap='xxsmall'
      label={(
        <SpacedText
          color={{
            dark: 'accent-2',
            light: 'neutral-2'
          }}
          size={labelSize}
        >
          {text}
        </SpacedText>
      )}
      onClick={onClick}
      plain
      {...props}
    />
  )
}

PlainButton.defaultProps = {
  className: '',
  labelSize: 'medium',
  onClick: () => {},
  text: '',
  theme: {
    dark: false
  }
}

PlainButton.propTypes = {
  className: string,
  labelSize: string,
  onClick: func,
  text: string,
  theme: shape({
    dark: bool
  })
}

export default withTheme(PlainButton)
