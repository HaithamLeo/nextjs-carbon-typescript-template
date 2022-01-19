import React from 'react'
import {
  Header,
  SkipToContent,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react'
import { Search20, Notification20, Switcher20 } from '@carbon/icons-react'

const CarbonHeader = () => {
  return (
    <Header aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search">
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Search">
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Search">
          <Switcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}

export default CarbonHeader
