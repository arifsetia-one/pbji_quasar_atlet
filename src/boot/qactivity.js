import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qactivity'

export default boot(({ app }) => {
  app.use(Plugin)
})
