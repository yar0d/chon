const TYPE_FRUIT = 'FR'
const TYPE_VEGETABLE = 'VG'
const TYPE_AROMATIC_HERB = 'HA'
const TYPE_GREENERY = 'GR'

const QUALITY_VERY_ADVISABLE = 'VA'
const QUALITY_ADVISABLE = 'AD'
const QUALITY_NOT_RECOMMENDED = 'NR'
const QUALITY_WITH_MODERATION = 'WM'
const QUALITY_TO_FORBID = 'TF'
const QUALITY_TOXIC = 'TX'
const QUALITY_NOT_TESTED = '?'

function getQualityColor (quality) {
  switch (quality) {
    case 'VA':
      return 'lime'
    case 'AD':
      return 'green'
    case 'WM':
      return 'cyan'
    case 'NR':
      return 'orange'
    case 'TF':
      return 'red'
    case 'TX':
      return 'red darken-1'
    default:
      return 'grey'
  }
}

function getQualityIcon (quality) {
  switch (quality) {
    case 'VA':
      return 'fas fa-check-double'
    case 'AD':
      return 'fas fa-check'
    case 'WM':
      return 'fas fa-meh'
    case 'NR':
      return 'fas fa-frown'
    case 'TF':
      return 'fas fa-ban'
    case 'TX':
      return 'fas fa-skull-crossbones'
    case '?':
      return 'fas fa-question'
    default:
      return ''
  }
}

function getQualityLabel (quality) {
  switch (quality) {
    case 'VA':
      return 'Very advisable'
    case 'AD':
      return 'Advisable'
    case 'NR':
      return 'Not recommended'
    case 'WM':
      return 'With moderation'
    case 'TF':
      return 'To forbid'
    case 'TX':
      return 'Toxic!'
    case '?':
      return 'Not tested'
    default:
      return ''
  }
}

function getTypeLabel (type) {
  switch (type.toUpperCase()) {
    case TYPE_FRUIT:
      return 'Fruit'
    case TYPE_VEGETABLE:
      return 'Vegetable'
    case TYPE_AROMATIC_HERB:
      return 'Aromatic herb'
    case TYPE_GREENERY:
      return 'Greenery'
    default:
      return ''
  }
}

function getTypeImage (type) {
  return '/img/' + type.toUpperCase() + '.png'
}

export default {
  TYPE_FRUIT,
  TYPE_VEGETABLE,
  TYPE_AROMATIC_HERB,
  TYPE_GREENERY,
  QUALITY_VERY_ADVISABLE,
  QUALITY_ADVISABLE,
  QUALITY_NOT_RECOMMENDED,
  QUALITY_WITH_MODERATION,
  QUALITY_TO_FORBID,
  QUALITY_TOXIC,
  QUALITY_NOT_TESTED,
  getQualityColor,
  getQualityIcon,
  getQualityLabel,
  getTypeImage,
  getTypeLabel
}
