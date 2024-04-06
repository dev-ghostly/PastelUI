import * as PastelUi from './Components/PastelUI'
function App() {
  return (
    <>
      <PastelUi.ResponsiveContainer $maxWidth='1280px' $margin='auto'>
        <PastelUi.Flex $justifyContent='space-between' $alignItems='center'>
          <PastelUi.Box $width="fit-content" $padding='20px' $backgroundColor='#F9F9F9'>Navigation</PastelUi.Box>
          <PastelUi.Box $width="100px" $backgroundColor='#F9F9F9'>
            <PastelUi.Button $color='green'>Sign In</PastelUi.Button>
          </PastelUi.Box>
        </PastelUi.Flex>
        <PastelUi.Flex>
          <PastelUi.Flex $direction='column' $flex='1'>
            <PastelUi.Box $padding='20px' $height='300px' $backgroundColor='blue'>Sidebar</PastelUi.Box>
          </PastelUi.Flex>
          <PastelUi.Flex $direction='column' $flex='3'>
            <PastelUi.Box $padding='20px' $height='300px' $backgroundColor='#F9F9F9'>Content</PastelUi.Box>
          </PastelUi.Flex>
        </PastelUi.Flex>
      </PastelUi.ResponsiveContainer>
    </>
  )
}

export default App
