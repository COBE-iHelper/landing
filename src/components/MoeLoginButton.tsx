import React from "react";

export interface MoeLoginButtonProps {
  variant?: "blue" | "cyan" | "white";
  size?: "default" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Official Ministry of Education "Yanshuf" (Owl) Vector Icon
 * Extracted with exact paths and colors from Adobe XD Specification
 */
export const MoeOwlIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24.26 37.01"
    width={size}
    height={(size * 37.01) / 24.26}
    className={className}
    style={{ display: "inline-block", flexShrink: 0 }}
    aria-hidden="true"
  >
    <path d="M 12.052 0.552 C 6.509 0.552 1.884 4.485 0.817 9.713 C 0.665 10.457 0.585 11.229 0.585 12.019 C 0.585 12.809 0.665 13.580 0.817 14.325 C 1.850 26.950 11.284 33.685 23.520 35.951 L 23.520 12.019 C 23.520 5.686 18.385 0.552 12.052 0.552" fill="#FFFFFF" />
    <path d="M 23.520 36.502 C 23.487 36.502 23.453 36.499 23.419 36.493 C 9.457 33.908 1.238 26.064 0.270 14.403 C 0.112 13.622 0.033 12.820 0.033 12.019 C 0.033 11.206 0.115 10.393 0.276 9.602 C 1.413 4.038 6.365 0.000 12.052 0.000 C 18.679 0.000 24.071 5.392 24.071 12.019 L 24.071 35.951 C 24.071 36.115 23.998 36.270 23.872 36.374 C 23.772 36.458 23.648 36.502 23.520 36.502 M 12.052 1.103 C 6.887 1.103 2.389 4.770 1.358 9.823 C 1.211 10.541 1.137 11.280 1.137 12.019 C 1.137 12.757 1.211 13.496 1.358 14.215 C 1.361 14.237 1.365 14.258 1.367 14.280 C 2.263 25.235 9.925 32.675 22.968 35.283 L 22.968 12.019 C 22.968 6.000 18.071 1.103 12.052 1.103" fill="#3A9DDD" />
    <path d="M 17.241 17.664 C 13.894 17.664 11.171 14.941 11.171 11.593 C 11.171 8.246 13.894 5.523 17.241 5.523 C 20.588 5.523 23.312 8.246 23.312 11.593 C 23.312 14.941 20.588 17.664 17.241 17.664 M 17.241 6.626 C 14.503 6.626 12.274 8.855 12.274 11.593 C 12.274 14.332 14.503 16.560 17.241 16.560 C 19.980 16.560 22.208 14.332 22.208 11.593 C 22.208 8.855 19.980 6.626 17.241 6.626" fill="#000000" />
    <path d="M 20.288 11.593 C 20.288 13.277 18.924 14.640 17.241 14.640 C 15.558 14.640 14.194 13.277 14.194 11.593 C 14.194 9.910 15.558 8.546 17.241 8.546 C 18.924 8.546 20.288 9.910 20.288 11.593" fill="#98B47B" />
    <rect x="17.241" y="8.546" width="3.142" height="3.047" fill="#FFFFFF" />
    <path d="M 6.070 17.664 C 2.723 17.664 0.000 14.941 0.000 11.593 C 0.000 8.246 2.723 5.523 6.070 5.523 C 9.417 5.523 12.141 8.246 12.141 11.593 C 12.141 14.941 9.417 17.664 6.070 17.664 M 6.070 6.626 C 3.332 6.626 1.103 8.855 1.103 11.593 C 1.103 14.332 3.332 16.560 6.070 16.560 C 8.809 16.560 11.037 14.332 11.037 11.593 C 11.037 8.855 8.809 6.626 6.070 6.626" fill="#000000" />
    <path d="M 9.117 11.593 C 9.117 13.277 7.753 14.640 6.070 14.640 C 4.387 14.640 3.023 13.277 3.023 11.593 C 3.023 9.910 4.387 8.546 6.070 8.546 C 7.753 8.546 9.117 9.910 9.117 11.593" fill="#98B47B" />
    <rect x="6.070" y="8.546" width="3.142" height="3.047" fill="#FFFFFF" />
    <path d="M 11.882 19.802 L 9.479 16.134 L 11.656 13.770 L 13.833 16.134 L 11.882 19.802 Z" fill="#FBBC3D" />
    <path d="M 23.711 36.456 C 23.711 36.456 11.938 27.212 23.711 17.505 L 23.711 36.456 Z" fill="#FFFFFF" />
    <path d="M 23.711 37.008 C 23.589 37.008 23.469 36.968 23.370 36.890 C 23.151 36.718 17.996 32.605 17.927 26.847 C 17.886 23.372 19.714 20.086 23.360 17.079 C 23.525 16.943 23.753 16.914 23.946 17.006 C 24.140 17.097 24.263 17.291 24.263 17.505 L 24.263 36.456 C 24.263 36.668 24.142 36.860 23.952 36.952 C 23.875 36.990 23.793 37.008 23.711 37.008 M 23.159 18.717 C 20.387 21.273 18.999 23.997 19.031 26.827 C 19.074 30.660 21.727 33.795 23.159 35.211 L 23.159 18.717 Z" fill="#3A9DDD" />
    <path d="M 22.891 32.258 C 22.716 32.258 22.545 32.176 22.437 32.021 C 18.544 26.410 22.439 21.931 22.479 21.887 C 22.682 21.660 23.030 21.640 23.258 21.843 C 23.485 22.045 23.505 22.393 23.303 22.621 C 23.165 22.777 19.956 26.511 23.344 31.392 C 23.517 31.643 23.455 31.986 23.205 32.160 C 23.109 32.226 23.000 32.258 22.891 32.258" fill="#3A9DDD" />
    <path d="M 11.655 9.707 C 11.394 9.707 11.161 9.521 11.113 9.254 C 10.393 5.285 5.946 2.292 0.769 2.292 C 0.465 2.292 0.218 2.044 0.218 1.740 C 0.218 1.435 0.465 1.188 0.769 1.188 C 6.471 1.188 11.385 4.571 12.199 9.057 C 12.253 9.357 12.054 9.644 11.754 9.698 C 11.721 9.704 11.688 9.707 11.655 9.707" fill="#3A9DDD" />
    <path d="M 11.656 9.707 C 11.624 9.707 11.591 9.704 11.557 9.698 C 11.257 9.644 11.059 9.357 11.113 9.057 C 11.927 4.571 16.841 1.188 22.543 1.188 C 22.847 1.188 23.094 1.435 23.094 1.740 C 23.094 2.044 22.847 2.292 22.543 2.292 C 17.366 2.292 12.919 5.285 12.199 9.254 C 12.151 9.521 11.918 9.707 11.656 9.707" fill="#3A9DDD" />
    <path d="M 7.641 11.941 C 7.641 12.809 6.938 13.512 6.070 13.512 C 5.202 13.512 4.499 12.809 4.499 11.941 C 4.499 11.073 5.202 10.370 6.070 10.370 C 6.938 10.370 7.641 11.073 7.641 11.941" fill="#000000" />
    <path d="M 18.812 11.941 C 18.812 12.809 18.109 13.512 17.241 13.512 C 16.373 13.512 15.670 12.809 15.670 11.941 C 15.670 11.073 16.373 10.370 17.241 10.370 C 18.109 10.370 18.812 11.073 18.812 11.941" fill="#000000" />
  </svg>
);

/**
 * Israel Ministry of Education Unified Authentication (IDM) Login Button
 * Spec: https://xd.adobe.com/view/b9077a7e-eccc-4755-98cd-118c7bac1b91-ec54/specs/
 */
export const MoeLoginButton: React.FC<MoeLoginButtonProps> = ({
  variant = "blue",
  size = "default",
  onClick,
  disabled = false,
  className = "",
  style = {},
}) => {
  const isLarge = size === "large";

  // Exact styles extracted from Adobe XD specification
  const variantStyles = {
    blue: {
      backgroundColor: "#2653A8",
      color: "#FFFFFF",
      border: "none",
      hoverBg: "#1e4590",
    },
    cyan: {
      backgroundColor: "#5AC9E5",
      color: "#000000",
      border: "none",
      hoverBg: "#4cbdd9",
    },
    white: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      border: "1px solid rgba(38, 83, 168, 0.25)",
      hoverBg: "#f8fafc",
    },
  }[variant];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      dir="rtl"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: isLarge ? "1rem" : "0.85rem",
        width: "100%",
        height: isLarge ? "69px" : "49px",
        borderRadius: "45px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        fontFamily: "'Assistant', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontSize: isLarge ? "1.35rem" : "1.1rem",
        fontWeight: 600,
        lineHeight: 1.2,
        paddingInline: "1.25rem",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.18s ease-in-out",
        outline: "none",
        ...variantStyles,
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = "translateY(-1px)";
        e.currentTarget.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.22)";
        e.currentTarget.style.backgroundColor = variantStyles.hoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0px 3px 6px rgba(0, 0, 0, 0.16)";
        e.currentTarget.style.backgroundColor = variantStyles.backgroundColor;
      }}
    >
      <MoeOwlIcon size={isLarge ? 32 : 24} />
      <span style={{ letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>הזדהות משרד החינוך</span>
    </button>
  );
};
