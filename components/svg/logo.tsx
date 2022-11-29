import * as React from "react";
import Svg, { SvgProps, Mask, Path } from "react-native-svg";

const LogoSvg = (props: SvgProps) => (
  <Svg
    width={422}
    height={238}
    viewBox="0 0 422 238"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path d="M328.636 135.543a20.61 20.61 0 0 1 .484-1.552c.544-1.531 1.23-2.817 2.056-3.859.853-1.062 1.84-1.831 2.962-2.306 1.148-.497 2.437-.648 3.865-.455 1.767.239 3.155.829 4.166 1.768 1.013.914 1.701 2.061 2.063 3.438.365 1.354.47 2.81.316 4.368l-.097.739-15.815-2.141Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M168.644 19.528c-1.324 10.133-10.468 17.255-20.424 15.907-9.955-1.348-16.951-10.656-15.627-20.789L24.44 0l-9.593 73.391c9.955 1.348 16.952 10.656 15.627 20.789-1.324 10.133-10.468 17.255-20.423 15.907L.458 183.478l108.154 14.646c1.324-10.133 10.468-17.255 20.423-15.907 9.956 1.348 16.952 10.656 15.628 20.789l252.358 34.174 9.593-73.391c-9.956-1.348-16.952-10.655-15.628-20.789 1.325-10.133 10.469-17.255 20.424-15.906l9.593-73.392-252.359-34.174ZM95.217 113.9c.135-1.035.099-1.98-.11-2.836-.18-.877-.627-1.702-1.339-2.475-.684-.795-1.699-1.609-3.043-2.443-1.317-.856-3.042-1.791-5.175-2.807A60.451 60.451 0 0 1 79 99.744c-2.002-1.274-3.728-2.674-5.18-4.2-1.426-1.521-2.476-3.193-3.15-5.014-.67-1.846-.857-3.902-.56-6.169.29-2.217 1.013-4.175 2.171-5.874 1.183-1.695 2.718-3.08 4.608-4.152 1.892-1.098 4.047-1.847 6.464-2.246 2.44-.397 5.078-.403 7.91-.02 3.92.531 7.214 1.717 9.88 3.557 2.691 1.844 4.66 4.116 5.908 6.817 1.248 2.702 1.669 5.605 1.263 8.709l-9.948-1.347c.22-1.676.061-3.201-.473-4.577-.51-1.373-1.42-2.524-2.726-3.453-1.283-.927-2.978-1.532-5.084-1.817-2.033-.275-3.767-.197-5.203.235-1.412.436-2.526 1.138-3.342 2.105-.792.971-1.273 2.11-1.444 3.415-.129.986-.015 1.904.342 2.754.36.826.955 1.647 1.784 2.461.833.79 1.889 1.572 3.167 2.347 1.305.753 2.829 1.536 4.57 2.349 2.789 1.28 5.201 2.61 7.238 3.989 2.061 1.382 3.727 2.861 4.999 4.438 1.297 1.579 2.195 3.281 2.696 5.104.525 1.826.644 3.835.357 6.028-.303 2.316-1.021 4.325-2.155 6.026-1.134 1.702-2.619 3.081-4.457 4.136-1.837 1.055-3.974 1.756-6.408 2.103-2.41.351-5.056.331-7.937-.059a29.07 29.07 0 0 1-7.489-2.068c-2.4-1.052-4.524-2.417-6.374-4.097a16.36 16.36 0 0 1-4.16-6.054c-.923-2.357-1.193-5.001-.81-7.933l10.02 1.357c-.222 1.7-.145 3.19.23 4.469a7.943 7.943 0 0 0 1.941 3.234c.92.877 2.035 1.579 3.346 2.108 1.31.528 2.752.899 4.325 1.112 2.034.276 3.74.218 5.122-.171 1.408-.411 2.507-1.09 3.296-2.036.813-.943 1.306-2.08 1.48-3.41Zm36.75-21.5-.918 7.02-6.862-.928-2.801 21.434c-.155 1.182-.117 2.115.114 2.798.231.684.647 1.179 1.247 1.486.601.307 1.336.519 2.208.637.629.085 1.215.127 1.757.125.542-.002 1-.015 1.372-.04l-.92 7.322c-.834.163-1.771.262-2.81.297-1.015.038-2.151-.028-3.41-.199-2.154-.291-3.994-.917-5.519-1.875-1.522-.984-2.621-2.374-3.298-4.17-.673-1.821-.828-4.124-.464-6.908l2.903-22.21-6.027-.816.918-7.022 6.027.816 1.285-9.83 9.621 1.303-1.285 9.83 6.862.93Zm12.026 15.007-3.508 26.839-9.585-1.298 5.226-39.985 9.077 1.229-.33 4.863c.098-.133.198-.263.3-.392 1.18-1.495 2.555-2.587 4.123-3.278 1.596-.711 3.35-.938 5.262-.679.532.072 1.095.199 1.687.38.619.158 1.101.337 1.445.534l-1.334 9.071a16.78 16.78 0 0 0-1.786-.468 24.452 24.452 0 0 0-1.842-.324c-1.476-.2-2.799-.166-3.967.102-1.165.243-2.172.696-3.022 1.358a7.475 7.475 0 0 0-1.746 2.048Zm30.94 30.865a12.724 12.724 0 0 0 4.78-2.916l-.287 4.164 9.076 1.229 5.227-39.986-9.658-1.308-3.73 28.538a7.825 7.825 0 0 1-2.932 2.641c-1.453.756-3.342.977-5.665.662a8.534 8.534 0 0 1-2.353-.657 5.143 5.143 0 0 1-1.77-1.443c-.458-.639-.787-1.423-.986-2.353-.174-.926-.174-2.054 0-3.385l3.386-25.906-9.585-1.297-3.377 25.831c-.347 2.661-.331 4.983.051 6.965.384 1.958 1.066 3.617 2.046 4.978a10.934 10.934 0 0 0 3.796 3.185c1.527.758 3.258 1.268 5.195 1.53 2.541.345 4.803.187 6.786-.472Zm40.599-1.761c-1.135.398-2.381.505-3.737.322-1.67-.227-3.004-.758-4.003-1.596a7.338 7.338 0 0 1-2.143-3.111c-.426-1.261-.664-2.647-.713-4.158a32.39 32.39 0 0 1 .282-4.701l.155-1.182c.209-1.602.517-3.114.925-4.538.436-1.446 1.021-2.72 1.756-3.824.763-1.126 1.722-1.961 2.877-2.507 1.18-.542 2.58-.703 4.202-.484 1.525.207 2.775.727 3.75 1.561a7.132 7.132 0 0 1 2.111 3.069c.433 1.212.58 2.536.442 3.971l9.04 1.225c.357-3.111-.004-5.906-1.084-8.384-1.056-2.475-2.712-4.504-4.969-6.088-2.232-1.581-4.933-2.587-8.104-3.016-3.001-.406-5.695-.245-8.081.485-2.386.73-4.451 1.917-6.193 3.562-1.718 1.648-3.111 3.64-4.18 5.978-1.045 2.341-1.75 4.903-2.114 7.687l-.154 1.183c-.364 2.784-.342 5.444.065 7.982.432 2.54 1.265 4.834 2.5 6.882 1.259 2.051 2.946 3.746 5.062 5.086 2.116 1.34 4.686 2.214 7.712 2.624 2.977.403 5.744.151 8.302-.756 2.584-.929 4.743-2.367 6.475-4.313 1.733-1.947 2.8-4.272 3.203-6.976l-9.041-1.224c-.219 1.299-.719 2.397-1.502 3.294a6.416 6.416 0 0 1-2.841 1.947Zm39.595-27.433-.918 7.021-6.861-.929-2.802 21.434c-.155 1.183-.116 2.116.115 2.799.23.683.646 1.178 1.246 1.485.601.307 1.337.519 2.208.637a12.67 12.67 0 0 0 1.757.125c.542-.001 1-.015 1.372-.039l-.92 7.322c-.834.163-1.77.261-2.81.296-1.014.038-2.151-.028-3.41-.198-2.154-.292-3.994-.917-5.519-1.876-1.522-.983-2.621-2.373-3.297-4.17-.674-1.821-.829-4.124-.465-6.908l2.903-22.21-6.027-.816.918-7.022 6.027.816 1.285-9.83 9.621 1.303-1.285 9.83 6.862.93Zm23.183 39.63a12.752 12.752 0 0 1-4.78 2.916c-1.983.659-4.245.817-6.787.472-1.936-.262-3.667-.772-5.194-1.53a10.925 10.925 0 0 1-3.796-3.185c-.98-1.361-1.662-3.021-2.047-4.978-.381-1.982-.398-4.304-.05-6.965l3.376-25.832 9.585 1.298-3.386 25.906c-.174 1.331-.173 2.459.001 3.385.199.93.527 1.714.986 2.353a5.143 5.143 0 0 0 1.77 1.443 8.527 8.527 0 0 0 2.352.657c2.324.315 4.213.094 5.666-.662a7.819 7.819 0 0 0 2.932-2.642l3.73-28.537 9.657 1.308-5.226 39.986-9.077-1.229.288-4.164Zm24.639 7.539 3.508-26.839a7.477 7.477 0 0 1 1.746-2.048c.85-.662 1.857-1.115 3.022-1.358 1.168-.269 2.491-.303 3.967-.103.581.079 1.195.187 1.842.325a16.78 16.78 0 0 1 1.786.468l1.334-9.072c-.344-.197-.826-.375-1.445-.534a10.81 10.81 0 0 0-1.687-.379c-1.912-.259-3.666-.032-5.262.679-1.568.69-2.943 1.783-4.123 3.278a13.07 13.07 0 0 0-.3.392l.33-4.863-9.077-1.23-5.226 39.986 9.585 1.298Zm23.97 2.494c2.243 1.307 4.854 2.162 7.831 2.565 2.565.347 4.874.309 6.924-.116 2.054-.449 3.845-1.146 5.373-2.093 1.552-.943 2.82-1.975 3.804-3.095l-4.162-5.754c-1.417 1.413-3.001 2.414-4.753 3.005-1.725.568-3.592.717-5.601.445-1.597-.217-2.988-.693-4.173-1.43a9.913 9.913 0 0 1-2.876-2.872c-.733-1.178-1.236-2.512-1.509-4.003a15.186 15.186 0 0 1-.184-3.147l25.419 3.443.536-4.102c.38-2.908.363-5.605-.051-8.093-.411-2.513-1.217-4.729-2.42-6.646-1.202-1.918-2.808-3.49-4.815-4.714-2.005-1.25-4.398-2.063-7.182-2.44-2.687-.364-5.208-.204-7.563.48a16.346 16.346 0 0 0-6.287 3.437c-1.836 1.606-3.356 3.62-4.559 6.039-1.199 2.395-2.001 5.132-2.403 8.212l-.193 1.478c-.355 2.71-.251 5.307.312 7.79.589 2.462 1.591 4.691 3.005 6.688 1.442 1.975 3.284 3.616 5.527 4.923Z"
      />
    </Mask>
    <Path
      d="M328.636 135.543a20.61 20.61 0 0 1 .484-1.552c.544-1.531 1.23-2.817 2.056-3.859.853-1.062 1.84-1.831 2.962-2.306 1.148-.497 2.437-.648 3.865-.455 1.767.239 3.155.829 4.166 1.768 1.013.914 1.701 2.061 2.063 3.438.365 1.354.47 2.81.316 4.368l-.097.739-15.815-2.141Z"
      fill="#0D9488"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M168.644 19.528c-1.324 10.133-10.468 17.255-20.424 15.907-9.955-1.348-16.951-10.656-15.627-20.789L24.44 0l-9.593 73.391c9.955 1.348 16.952 10.656 15.627 20.789-1.324 10.133-10.468 17.255-20.423 15.907L.458 183.478l108.154 14.646c1.324-10.133 10.468-17.255 20.423-15.907 9.956 1.348 16.952 10.656 15.628 20.789l252.358 34.174 9.593-73.391c-9.956-1.348-16.952-10.655-15.628-20.789 1.325-10.133 10.469-17.255 20.424-15.906l9.593-73.392-252.359-34.174ZM95.217 113.9c.135-1.035.099-1.98-.11-2.836-.18-.877-.627-1.702-1.339-2.475-.684-.795-1.699-1.609-3.043-2.443-1.317-.856-3.042-1.791-5.175-2.807A60.451 60.451 0 0 1 79 99.744c-2.002-1.274-3.728-2.674-5.18-4.2-1.426-1.521-2.476-3.193-3.15-5.014-.67-1.846-.857-3.902-.56-6.169.29-2.217 1.013-4.175 2.171-5.874 1.183-1.695 2.718-3.08 4.608-4.152 1.892-1.098 4.047-1.847 6.464-2.246 2.44-.397 5.078-.403 7.91-.02 3.92.531 7.214 1.717 9.88 3.557 2.691 1.844 4.66 4.116 5.908 6.817 1.248 2.702 1.669 5.605 1.263 8.709l-9.948-1.347c.22-1.676.061-3.201-.473-4.577-.51-1.373-1.42-2.524-2.726-3.453-1.283-.927-2.978-1.532-5.084-1.817-2.033-.275-3.767-.197-5.203.235-1.412.436-2.526 1.138-3.342 2.105-.792.971-1.273 2.11-1.444 3.415-.129.986-.015 1.904.342 2.754.36.826.955 1.647 1.784 2.461.833.79 1.889 1.572 3.167 2.347 1.305.753 2.829 1.536 4.57 2.349 2.789 1.28 5.201 2.61 7.238 3.989 2.061 1.382 3.727 2.861 4.999 4.438 1.297 1.579 2.195 3.281 2.696 5.104.525 1.826.644 3.835.357 6.028-.303 2.316-1.021 4.325-2.155 6.026-1.134 1.702-2.619 3.081-4.457 4.136-1.837 1.055-3.974 1.756-6.408 2.103-2.41.351-5.056.331-7.937-.059a29.07 29.07 0 0 1-7.489-2.068c-2.4-1.052-4.524-2.417-6.374-4.097a16.36 16.36 0 0 1-4.16-6.054c-.923-2.357-1.193-5.001-.81-7.933l10.02 1.357c-.222 1.7-.145 3.19.23 4.469a7.943 7.943 0 0 0 1.941 3.234c.92.877 2.035 1.579 3.346 2.108 1.31.528 2.752.899 4.325 1.112 2.034.276 3.74.218 5.122-.171 1.408-.411 2.507-1.09 3.296-2.036.813-.943 1.306-2.08 1.48-3.41Zm36.75-21.5-.918 7.02-6.862-.928-2.801 21.434c-.155 1.182-.117 2.115.114 2.798.231.684.647 1.179 1.247 1.486.601.307 1.336.519 2.208.637.629.085 1.215.127 1.757.125.542-.002 1-.015 1.372-.04l-.92 7.322c-.834.163-1.771.262-2.81.297-1.015.038-2.151-.028-3.41-.199-2.154-.291-3.994-.917-5.519-1.875-1.522-.984-2.621-2.374-3.298-4.17-.673-1.821-.828-4.124-.464-6.908l2.903-22.21-6.027-.816.918-7.022 6.027.816 1.285-9.83 9.621 1.303-1.285 9.83 6.862.93Zm12.026 15.007-3.508 26.839-9.585-1.298 5.226-39.985 9.077 1.229-.33 4.863c.098-.133.198-.263.3-.392 1.18-1.495 2.555-2.587 4.123-3.278 1.596-.711 3.35-.938 5.262-.679.532.072 1.095.199 1.687.38.619.158 1.101.337 1.445.534l-1.334 9.071a16.78 16.78 0 0 0-1.786-.468 24.452 24.452 0 0 0-1.842-.324c-1.476-.2-2.799-.166-3.967.102-1.165.243-2.172.696-3.022 1.358a7.475 7.475 0 0 0-1.746 2.048Zm30.94 30.865a12.724 12.724 0 0 0 4.78-2.916l-.287 4.164 9.076 1.229 5.227-39.986-9.658-1.308-3.73 28.538a7.825 7.825 0 0 1-2.932 2.641c-1.453.756-3.342.977-5.665.662a8.534 8.534 0 0 1-2.353-.657 5.143 5.143 0 0 1-1.77-1.443c-.458-.639-.787-1.423-.986-2.353-.174-.926-.174-2.054 0-3.385l3.386-25.906-9.585-1.297-3.377 25.831c-.347 2.661-.331 4.983.051 6.965.384 1.958 1.066 3.617 2.046 4.978a10.934 10.934 0 0 0 3.796 3.185c1.527.758 3.258 1.268 5.195 1.53 2.541.345 4.803.187 6.786-.472Zm40.599-1.761c-1.135.398-2.381.505-3.737.322-1.67-.227-3.004-.758-4.003-1.596a7.338 7.338 0 0 1-2.143-3.111c-.426-1.261-.664-2.647-.713-4.158a32.39 32.39 0 0 1 .282-4.701l.155-1.182c.209-1.602.517-3.114.925-4.538.436-1.446 1.021-2.72 1.756-3.824.763-1.126 1.722-1.961 2.877-2.507 1.18-.542 2.58-.703 4.202-.484 1.525.207 2.775.727 3.75 1.561a7.132 7.132 0 0 1 2.111 3.069c.433 1.212.58 2.536.442 3.971l9.04 1.225c.357-3.111-.004-5.906-1.084-8.384-1.056-2.475-2.712-4.504-4.969-6.088-2.232-1.581-4.933-2.587-8.104-3.016-3.001-.406-5.695-.245-8.081.485-2.386.73-4.451 1.917-6.193 3.562-1.718 1.648-3.111 3.64-4.18 5.978-1.045 2.341-1.75 4.903-2.114 7.687l-.154 1.183c-.364 2.784-.342 5.444.065 7.982.432 2.54 1.265 4.834 2.5 6.882 1.259 2.051 2.946 3.746 5.062 5.086 2.116 1.34 4.686 2.214 7.712 2.624 2.977.403 5.744.151 8.302-.756 2.584-.929 4.743-2.367 6.475-4.313 1.733-1.947 2.8-4.272 3.203-6.976l-9.041-1.224c-.219 1.299-.719 2.397-1.502 3.294a6.416 6.416 0 0 1-2.841 1.947Zm39.595-27.433-.918 7.021-6.861-.929-2.802 21.434c-.155 1.183-.116 2.116.115 2.799.23.683.646 1.178 1.246 1.485.601.307 1.337.519 2.208.637a12.67 12.67 0 0 0 1.757.125c.542-.001 1-.015 1.372-.039l-.92 7.322c-.834.163-1.77.261-2.81.296-1.014.038-2.151-.028-3.41-.198-2.154-.292-3.994-.917-5.519-1.876-1.522-.983-2.621-2.373-3.297-4.17-.674-1.821-.829-4.124-.465-6.908l2.903-22.21-6.027-.816.918-7.022 6.027.816 1.285-9.83 9.621 1.303-1.285 9.83 6.862.93Zm23.183 39.63a12.752 12.752 0 0 1-4.78 2.916c-1.983.659-4.245.817-6.787.472-1.936-.262-3.667-.772-5.194-1.53a10.925 10.925 0 0 1-3.796-3.185c-.98-1.361-1.662-3.021-2.047-4.978-.381-1.982-.398-4.304-.05-6.965l3.376-25.832 9.585 1.298-3.386 25.906c-.174 1.331-.173 2.459.001 3.385.199.93.527 1.714.986 2.353a5.143 5.143 0 0 0 1.77 1.443 8.527 8.527 0 0 0 2.352.657c2.324.315 4.213.094 5.666-.662a7.819 7.819 0 0 0 2.932-2.642l3.73-28.537 9.657 1.308-5.226 39.986-9.077-1.229.288-4.164Zm24.639 7.539 3.508-26.839a7.477 7.477 0 0 1 1.746-2.048c.85-.662 1.857-1.115 3.022-1.358 1.168-.269 2.491-.303 3.967-.103.581.079 1.195.187 1.842.325a16.78 16.78 0 0 1 1.786.468l1.334-9.072c-.344-.197-.826-.375-1.445-.534a10.81 10.81 0 0 0-1.687-.379c-1.912-.259-3.666-.032-5.262.679-1.568.69-2.943 1.783-4.123 3.278a13.07 13.07 0 0 0-.3.392l.33-4.863-9.077-1.23-5.226 39.986 9.585 1.298Zm23.97 2.494c2.243 1.307 4.854 2.162 7.831 2.565 2.565.347 4.874.309 6.924-.116 2.054-.449 3.845-1.146 5.373-2.093 1.552-.943 2.82-1.975 3.804-3.095l-4.162-5.754c-1.417 1.413-3.001 2.414-4.753 3.005-1.725.568-3.592.717-5.601.445-1.597-.217-2.988-.693-4.173-1.43a9.913 9.913 0 0 1-2.876-2.872c-.733-1.178-1.236-2.512-1.509-4.003a15.186 15.186 0 0 1-.184-3.147l25.419 3.443.536-4.102c.38-2.908.363-5.605-.051-8.093-.411-2.513-1.217-4.729-2.42-6.646-1.202-1.918-2.808-3.49-4.815-4.714-2.005-1.25-4.398-2.063-7.182-2.44-2.687-.364-5.208-.204-7.563.48a16.346 16.346 0 0 0-6.287 3.437c-1.836 1.606-3.356 3.62-4.559 6.039-1.199 2.395-2.001 5.132-2.403 8.212l-.193 1.478c-.355 2.71-.251 5.307.312 7.79.589 2.462 1.591 4.691 3.005 6.688 1.442 1.975 3.284 3.616 5.527 4.923Z"
      fill="#0D9488"
    />
    <Path
      d="M328.636 135.543a20.61 20.61 0 0 1 .484-1.552c.544-1.531 1.23-2.817 2.056-3.859.853-1.062 1.84-1.831 2.962-2.306 1.148-.497 2.437-.648 3.865-.455 1.767.239 3.155.829 4.166 1.768 1.013.914 1.701 2.061 2.063 3.438.365 1.354.47 2.81.316 4.368l-.097.739-15.815-2.141Z"
      stroke="#164E63"
      strokeWidth={0.6}
      mask="url(#a)"
    />
    <Path
      clipRule="evenodd"
      d="M168.644 19.528c-1.324 10.133-10.468 17.255-20.424 15.907-9.955-1.348-16.951-10.656-15.627-20.789L24.44 0l-9.593 73.391c9.955 1.348 16.952 10.656 15.627 20.789-1.324 10.133-10.468 17.255-20.423 15.907L.458 183.478l108.154 14.646c1.324-10.133 10.468-17.255 20.423-15.907 9.956 1.348 16.952 10.656 15.628 20.789l252.358 34.174 9.593-73.391c-9.956-1.348-16.952-10.655-15.628-20.789 1.325-10.133 10.469-17.255 20.424-15.906l9.593-73.392-252.359-34.174ZM95.217 113.9c.135-1.035.099-1.98-.11-2.836-.18-.877-.627-1.702-1.339-2.475-.684-.795-1.699-1.609-3.043-2.443-1.317-.856-3.042-1.791-5.175-2.807A60.451 60.451 0 0 1 79 99.744c-2.002-1.274-3.728-2.674-5.18-4.2-1.426-1.521-2.476-3.193-3.15-5.014-.67-1.846-.857-3.902-.56-6.169.29-2.217 1.013-4.175 2.171-5.874 1.183-1.695 2.718-3.08 4.608-4.152 1.892-1.098 4.047-1.847 6.464-2.246 2.44-.397 5.078-.403 7.91-.02 3.92.531 7.214 1.717 9.88 3.557 2.691 1.844 4.66 4.116 5.908 6.817 1.248 2.702 1.669 5.605 1.263 8.709l-9.948-1.347c.22-1.676.061-3.201-.473-4.577-.51-1.373-1.42-2.524-2.726-3.453-1.283-.927-2.978-1.532-5.084-1.817-2.033-.275-3.767-.197-5.203.235-1.412.436-2.526 1.138-3.342 2.105-.792.971-1.273 2.11-1.444 3.415-.129.986-.015 1.904.342 2.754.36.826.955 1.647 1.784 2.461.833.79 1.889 1.572 3.167 2.347 1.305.753 2.829 1.536 4.57 2.349 2.789 1.28 5.201 2.61 7.238 3.989 2.061 1.382 3.727 2.861 4.999 4.438 1.297 1.579 2.195 3.281 2.696 5.104.525 1.826.644 3.835.357 6.028-.303 2.316-1.021 4.325-2.155 6.026-1.134 1.702-2.619 3.081-4.457 4.136-1.837 1.055-3.974 1.756-6.408 2.103-2.41.351-5.056.331-7.937-.059a29.07 29.07 0 0 1-7.489-2.068c-2.4-1.052-4.524-2.417-6.374-4.097a16.36 16.36 0 0 1-4.16-6.054c-.923-2.357-1.193-5.001-.81-7.933l10.02 1.357c-.222 1.7-.145 3.19.23 4.469a7.943 7.943 0 0 0 1.941 3.234c.92.877 2.035 1.579 3.346 2.108 1.31.528 2.752.899 4.325 1.112 2.034.276 3.74.218 5.122-.171 1.408-.411 2.507-1.09 3.296-2.036.813-.943 1.306-2.08 1.48-3.41Zm36.75-21.5-.918 7.02-6.862-.928-2.801 21.434c-.155 1.182-.117 2.115.114 2.798.231.684.647 1.179 1.247 1.486.601.307 1.336.519 2.208.637.629.085 1.215.127 1.757.125.542-.002 1-.015 1.372-.04l-.92 7.322c-.834.163-1.771.262-2.81.297-1.015.038-2.151-.028-3.41-.199-2.154-.291-3.994-.917-5.519-1.875-1.522-.984-2.621-2.374-3.298-4.17-.673-1.821-.828-4.124-.464-6.908l2.903-22.21-6.027-.816.918-7.022 6.027.816 1.285-9.83 9.621 1.303-1.285 9.83 6.862.93Zm12.026 15.007-3.508 26.839-9.585-1.298 5.226-39.985 9.077 1.229-.33 4.863c.098-.133.198-.263.3-.392 1.18-1.495 2.555-2.587 4.123-3.278 1.596-.711 3.35-.938 5.262-.679.532.072 1.095.199 1.687.38.619.158 1.101.337 1.445.534l-1.334 9.071a16.78 16.78 0 0 0-1.786-.468 24.452 24.452 0 0 0-1.842-.324c-1.476-.2-2.799-.166-3.967.102-1.165.243-2.172.696-3.022 1.358a7.475 7.475 0 0 0-1.746 2.048Zm30.94 30.865a12.724 12.724 0 0 0 4.78-2.916l-.287 4.164 9.076 1.229 5.227-39.986-9.658-1.308-3.73 28.538a7.825 7.825 0 0 1-2.932 2.641c-1.453.756-3.342.977-5.665.662a8.534 8.534 0 0 1-2.353-.657 5.143 5.143 0 0 1-1.77-1.443c-.458-.639-.787-1.423-.986-2.353-.174-.926-.174-2.054 0-3.385l3.386-25.906-9.585-1.297-3.377 25.831c-.347 2.661-.331 4.983.051 6.965.384 1.958 1.066 3.617 2.046 4.978a10.934 10.934 0 0 0 3.796 3.185c1.527.758 3.258 1.268 5.195 1.53 2.541.345 4.803.187 6.786-.472Zm40.599-1.761c-1.135.398-2.381.505-3.737.322-1.67-.227-3.004-.758-4.003-1.596a7.338 7.338 0 0 1-2.143-3.111c-.426-1.261-.664-2.647-.713-4.158a32.39 32.39 0 0 1 .282-4.701l.155-1.182c.209-1.602.517-3.114.925-4.538.436-1.446 1.021-2.72 1.756-3.824.763-1.126 1.722-1.961 2.877-2.507 1.18-.542 2.58-.703 4.202-.484 1.525.207 2.775.727 3.75 1.561a7.132 7.132 0 0 1 2.111 3.069c.433 1.212.58 2.536.442 3.971l9.04 1.225c.357-3.111-.004-5.906-1.084-8.384-1.056-2.475-2.712-4.504-4.969-6.088-2.232-1.581-4.933-2.587-8.104-3.016-3.001-.406-5.695-.245-8.081.485-2.386.73-4.451 1.917-6.193 3.562-1.718 1.648-3.111 3.64-4.18 5.978-1.045 2.341-1.75 4.903-2.114 7.687l-.154 1.183c-.364 2.784-.342 5.444.065 7.982.432 2.54 1.265 4.834 2.5 6.882 1.259 2.051 2.946 3.746 5.062 5.086 2.116 1.34 4.686 2.214 7.712 2.624 2.977.403 5.744.151 8.302-.756 2.584-.929 4.743-2.367 6.475-4.313 1.733-1.947 2.8-4.272 3.203-6.976l-9.041-1.224c-.219 1.299-.719 2.397-1.502 3.294a6.416 6.416 0 0 1-2.841 1.947Zm39.595-27.433-.918 7.021-6.861-.929-2.802 21.434c-.155 1.183-.116 2.116.115 2.799.23.683.646 1.178 1.246 1.485.601.307 1.337.519 2.208.637a12.67 12.67 0 0 0 1.757.125c.542-.001 1-.015 1.372-.039l-.92 7.322c-.834.163-1.77.261-2.81.296-1.014.038-2.151-.028-3.41-.198-2.154-.292-3.994-.917-5.519-1.876-1.522-.983-2.621-2.373-3.297-4.17-.674-1.821-.829-4.124-.465-6.908l2.903-22.21-6.027-.816.918-7.022 6.027.816 1.285-9.83 9.621 1.303-1.285 9.83 6.862.93Zm23.183 39.63a12.752 12.752 0 0 1-4.78 2.916c-1.983.659-4.245.817-6.787.472-1.936-.262-3.667-.772-5.194-1.53a10.925 10.925 0 0 1-3.796-3.185c-.98-1.361-1.662-3.021-2.047-4.978-.381-1.982-.398-4.304-.05-6.965l3.376-25.832 9.585 1.298-3.386 25.906c-.174 1.331-.173 2.459.001 3.385.199.93.527 1.714.986 2.353a5.143 5.143 0 0 0 1.77 1.443 8.527 8.527 0 0 0 2.352.657c2.324.315 4.213.094 5.666-.662a7.819 7.819 0 0 0 2.932-2.642l3.73-28.537 9.657 1.308-5.226 39.986-9.077-1.229.288-4.164Zm24.639 7.539 3.508-26.839a7.477 7.477 0 0 1 1.746-2.048c.85-.662 1.857-1.115 3.022-1.358 1.168-.269 2.491-.303 3.967-.103.581.079 1.195.187 1.842.325a16.78 16.78 0 0 1 1.786.468l1.334-9.072c-.344-.197-.826-.375-1.445-.534a10.81 10.81 0 0 0-1.687-.379c-1.912-.259-3.666-.032-5.262.679-1.568.69-2.943 1.783-4.123 3.278a13.07 13.07 0 0 0-.3.392l.33-4.863-9.077-1.23-5.226 39.986 9.585 1.298Zm23.97 2.494c2.243 1.307 4.854 2.162 7.831 2.565 2.565.347 4.874.309 6.924-.116 2.054-.449 3.845-1.146 5.373-2.093 1.552-.943 2.82-1.975 3.804-3.095l-4.162-5.754c-1.417 1.413-3.001 2.414-4.753 3.005-1.725.568-3.592.717-5.601.445-1.597-.217-2.988-.693-4.173-1.43a9.913 9.913 0 0 1-2.876-2.872c-.733-1.178-1.236-2.512-1.509-4.003a15.186 15.186 0 0 1-.184-3.147l25.419 3.443.536-4.102c.38-2.908.363-5.605-.051-8.093-.411-2.513-1.217-4.729-2.42-6.646-1.202-1.918-2.808-3.49-4.815-4.714-2.005-1.25-4.398-2.063-7.182-2.44-2.687-.364-5.208-.204-7.563.48a16.346 16.346 0 0 0-6.287 3.437c-1.836 1.606-3.356 3.62-4.559 6.039-1.199 2.395-2.001 5.132-2.403 8.212l-.193 1.478c-.355 2.71-.251 5.307.312 7.79.589 2.462 1.591 4.691 3.005 6.688 1.442 1.975 3.284 3.616 5.527 4.923Z"
      stroke="#164E63"
      strokeWidth={0.6}
      mask="url(#a)"
    />
  </Svg>
);

export default LogoSvg;
