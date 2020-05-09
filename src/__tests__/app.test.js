describe('App', () => {
  beforeEach(() => {
    window.Modernizr = {
      prefixed: jest.fn().mockReturnValue('WebkitTransition')
    }
    window.classie = jest.fn()
  })

  it('renders without crashing', () => {
    console.log('working')
  })
})
