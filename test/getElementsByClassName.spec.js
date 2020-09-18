import { getElementsByClassName } from '../src/index.js'
import { assertResultEqual, withDom } from './utils.js';
import classNamesLight1 from './fixtures/classNames1/light.html'
import classNamesShadow1 from './fixtures/classNames1/shadow.html'

describe('getElementsByClassName', () => {
  const expected = [
    {
      tagName: 'DIV',
      classList: ['container', 'main']
    },
    {
      tagName: 'SPAN',
      classList: ['container', 'main', 'outerText']
    },
    {
      tagName: 'SPAN',
      classList: ['container', 'main', 'innerText']
    }
  ]

  it('light DOM - getElementsByClassName', () => {
    const classNames = 'container main'
    withDom(classNamesLight1, context => {
      assertResultEqual(classNames, context.getElementsByClassName(classNames), expected, true)
    })
  })

  it('shadow DOM - getElementsByClassName', () => {
    const classNames = 'container main'
    withDom(classNamesShadow1, context => {
      assertResultEqual('.container.main', getElementsByClassName(classNames, context), expected, true)
    })
  })

  it('light DOM - getElementsByClassName with multiple spaces', () => {
    withDom(classNamesLight1, context => {
      const classNames = 'container      main'
      assertResultEqual(classNames, context.getElementsByClassName(classNames), expected, true)
    })
  })

  it('shadow DOM - getElementsByClassName with multiple spaces', () => {
    withDom(classNamesShadow1, context => {
      const classNames = 'container      main'
      assertResultEqual(classNames, getElementsByClassName(classNames, context), expected, true)
    })
  })

  it('light DOM - getElementsByClassName with line breaks', () => {
    withDom(classNamesLight1, context => {
      const classNames = `main
      
      
      
      container`
      assertResultEqual(classNames, context.getElementsByClassName(classNames), expected, true)
    })
  })

  it('shadow DOM - getElementsByClassName with line breaks', () => {
    withDom(classNamesShadow1, context => {
      const classNames = `main
      
      
      
      container`
      assertResultEqual(classNames, getElementsByClassName(classNames, context), expected, true)
    })
  })

  it('light DOM - getElementsByClassName with tabs', () => {
    withDom(classNamesLight1, context => {
      const classNames = 'main	container'
      assertResultEqual(classNames, context.getElementsByClassName(classNames), expected, true)
    })
  })

  it('shadow DOM - getElementsByClassName with tabs', () => {
    withDom(classNamesShadow1, context => {
      const classNames = 'main	container'
      assertResultEqual(classNames, getElementsByClassName(classNames, context), expected, true)
    })
  })

  it('light DOM - getElementsByClassName with spaces, line breaks, and tabs', () => {
    withDom(classNamesLight1, context => {
      const classNames = `	main	container
      
            
      `
      assertResultEqual(classNames, context.getElementsByClassName(classNames), expected, true)
    })
  })

  it('shadow DOM - getElementsByClassName with spaces, line breaks, and tabs', () => {
    withDom(classNamesShadow1, context => {
      const classNames = `	main	container
        
            	
        `
      assertResultEqual(classNames, getElementsByClassName(classNames, context), expected, true)
    })
  })
})