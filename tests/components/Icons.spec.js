import React from 'react'
import { shallow } from 'enzyme'
import Icon, * as Icons from 'components/Icons'

describe('(Component) Icons', function () {
  let _wrapper

  context('base component', function () {
    before(function () {
      sinon.stub(console, 'error')
    })

    after(function () {
      console.error.restore()
    })

    it('should expect icon type in properties', function () {
      _wrapper = shallow(<Icon />)
      expect(console.error.lastCall.args[0].indexOf('The prop `iconType` is marked as required')).to.be.at.least(0)
    })

    it('should add class `icon_active` if `active` property is enabled', function () {
      _wrapper = shallow(<Icon active iconType='icon' />)
      expect(_wrapper.find('span').hasClass('icon_active')).to.be.ok
    })

    it('should join class names', function () {
      _wrapper = shallow(<Icon active className='test' iconType='icon' />)
      expect(_wrapper.find('span').hasClass('icon_active')).to.be.ok
      expect(_wrapper.find('span').hasClass('test')).to.be.ok
      expect(_wrapper.find('span').hasClass('icon_icon')).to.be.ok
    })

    it('should transit props', function () {
      _wrapper = shallow(<Icon hidden={false} />)
      expect(_wrapper.find('span').prop('hidden')).to.equal(false)
    })
  })

  context('sub-components', function () {
    it('should have corresponding class names', function () {
      _wrapper = shallow(<Icons.MailIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_mail')).to.be.ok
      _wrapper = shallow(<Icons.PhoneIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_phone')).to.be.ok
      _wrapper = shallow(<Icons.FacebookIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_facebook')).to.be.ok
      _wrapper = shallow(<Icons.TwitterIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_twitter')).to.be.ok
      _wrapper = shallow(<Icons.GooglePlusIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_googlePlus')).to.be.ok
      _wrapper = shallow(<Icons.InstagramIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_instagram')).to.be.ok
      _wrapper = shallow(<Icons.SearchIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_search')).to.be.ok
      _wrapper = shallow(<Icons.UserIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_user')).to.be.ok
      _wrapper = shallow(<Icons.CartIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_cart')).to.be.ok
      _wrapper = shallow(<Icons.ShareIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_share')).to.be.ok
      _wrapper = shallow(<Icons.AddToCartIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_addToCart')).to.be.ok
      _wrapper = shallow(<Icons.LikeIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_like')).to.be.ok
      _wrapper = shallow(<Icons.StarIcon />)
      expect(_wrapper.find(Icon).dive().find('span').hasClass('icon_star')).to.be.ok
    })

    it('should transit props', function () {
      _wrapper = shallow(<Icons.MailIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.PhoneIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.FacebookIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.TwitterIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.GooglePlusIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.InstagramIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.SearchIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.UserIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.CartIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.ShareIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.AddToCartIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.LikeIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
      _wrapper = shallow(<Icons.StarIcon hidden={false} />)
      expect(_wrapper.find(Icon).prop('hidden')).to.equal(false)
    })
  })
})
