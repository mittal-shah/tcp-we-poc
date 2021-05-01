import { LongStringItemModel } from '../../declarations/global'
import SelectItemImpl from './select-item.impl'
import HeaderValueImpl from './header-value.impl'

export default class LongStringItemImpl extends SelectItemImpl implements LongStringItemModel {
  LngKey?: number | undefined = 0

  StrHelp?: string | undefined = ''

  StrId?: string | undefined = ''

  StrText?: string | undefined = ''

  _ArrColumnValues?: string[] | undefined = []

  _ArrHeaderValues?: HeaderValueImpl[] | undefined = []

  constructor(value?: number | undefined, text?: string | undefined) {
    super()
    this.setValue(value)
    this.setText(text)
  }

  init(data?: LongStringItemModel) {
    if (!data) {
      return
    }

    this.copyTypedArray(data, 'HeaderValueModel', HeaderValueImpl)
  }

  getKey() {
    return this.LngKey
  }

  getValue() {
    return this.LngKey
  }

  getText() {
    return this.StrText
  }

  setValue(value: number | undefined) {
    this.LngKey = value
  }

  setText(text: string | undefined) {
    this.StrText = text
  }
}
