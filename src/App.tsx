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
          <PastelUi.Box $padding='20px'>
            <PastelUi.Flex $direction='row' $flex='3' $gap='20px' $wrap='wrap'>
              <PastelUi.Card $title='Product' $description='Description of the product' $price={"$20.00"} $button1Text='Coucou' $button1OnClick={() => console.log("Coucou")} $image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
              <PastelUi.Card $title='Product' $description='Description of the product' $price={"$20.00"} $button1Text='Coucou' $button1OnClick={() => console.log("Coucou")} $image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
              <PastelUi.Card $title='Product' $description='Description of the product' $price={"$20.00"} $button1Text='Coucou' $button1OnClick={() => console.log("Coucou")} $image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
              <PastelUi.Card $title='Product' $description='Description of the product' $price={"$20.00"} $button1Text='Coucou' $button1OnClick={() => console.log("Coucou")} $image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
              <PastelUi.Card $title='Product' $description='Description of the product' $price={"$20.00"} $button1Text='Coucou' $button1OnClick={() => console.log("Coucou")} $image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
              <PastelUi.Card $title='Product' $description='Description of the product' $price={"$20.00"} $button1Text='Coucou' $button1OnClick={() => console.log("Coucou")} $image='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
            </PastelUi.Flex>
          </PastelUi.Box>
        </PastelUi.Flex>
      </PastelUi.ResponsiveContainer>
    </>
  )
}

export default App
