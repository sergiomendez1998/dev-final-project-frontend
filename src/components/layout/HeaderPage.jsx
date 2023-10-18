import PropTypes from 'prop-types'

export const HeaderPage = ({ title, pref, suf }) => {
  return (
    <div className="my-3 flex flex-row items-center justify-between">
      <div className="columns-1">
        <p className="m-0 text-2xl font-bold md:text-4xl">{title}</p>
      </div>
      <div className="columns-1">
        <ol className="m-0 flex">
          <a className="pe-1 text-gray-400 hover:text-gray-600">{pref}</a>
          <span className="text-gray-400">/</span>
          <div className="ps-1 text-gray-400 hover:text-gray-600">{suf ?? title}</div>
        </ol>
      </div>
    </div>
  )
}

HeaderPage.propTypes = {
  title: PropTypes.string.isRequired,
  pref: PropTypes.string.isRequired,
  suf: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

