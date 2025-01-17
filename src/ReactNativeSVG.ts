import Shape from './elements/Shape';
import Rect from './elements/Rect';
import Circle from './elements/Circle';
import Ellipse from './elements/Ellipse';
import Polygon from './elements/Polygon';
import Polyline from './elements/Polyline';
import Line from './elements/Line';
import Svg from './elements/Svg';
import Path from './elements/Path';
import G from './elements/G';
import Text from './elements/Text';
import TSpan from './elements/TSpan';
import TextPath from './elements/TextPath';
import Use from './elements/Use';
import Image from './elements/Image';
import Symbol from './elements/Symbol';
import Defs from './elements/Defs';
import LinearGradient from './elements/LinearGradient';
import RadialGradient from './elements/RadialGradient';
import Stop from './elements/Stop';
import ClipPath from './elements/ClipPath';
import Pattern from './elements/Pattern';
import Mask from './elements/Mask';
import Marker from './elements/Marker';
import ForeignObject from './elements/ForeignObject';
import Filter from './elements/filters/Filter';
import FeColorMatrix from './elements/filters/FeColorMatrix';
import FeGaussianBlur from './elements/filters/FeGaussianBlur';
import FeOffset from './elements/filters/FeOffset';

import {
  parse,
  SvgAst,
  SvgFromUri,
  SvgFromXml,
  SvgUri,
  SvgXml,
  camelCase,
  fetchText,
  JsxAST,
  Middleware,
  Styles,
  UriProps,
  UriState,
  XmlAST,
  XmlProps,
  XmlState,
  AstProps,
} from './xml';

import {
  RNSVGCircle,
  RNSVGClipPath,
  RNSVGDefs,
  RNSVGEllipse,
  RNSVGForeignObject,
  RNSVGGroup,
  RNSVGImage,
  RNSVGLine,
  RNSVGLinearGradient,
  RNSVGMarker,
  RNSVGMask,
  RNSVGPath,
  RNSVGPattern,
  RNSVGRadialGradient,
  RNSVGRect,
  RNSVGSvgAndroid,
  RNSVGSvgIOS,
  RNSVGSymbol,
  RNSVGText,
  RNSVGTextPath,
  RNSVGTSpan,
  RNSVGUse,
  RNSVGFilter,
  RNSVGFeColorMatrix,
  RNSVGFeGaussianBlur,
  RNSVGFeOffset,
} from './fabric';

export {
  SvgCss,
  SvgCssUri,
  SvgWithCss,
  SvgWithCssUri,
  inlineStyles,
  LocalSvg,
  WithLocalSvg,
  loadLocalRawResource,
} from './deprecated';

export type { RectProps } from './elements/Rect';
export type { CircleProps } from './elements/Circle';
export type { EllipseProps } from './elements/Ellipse';
export type { PolygonProps } from './elements/Polygon';
export type { PolylineProps } from './elements/Polyline';
export type { LineProps } from './elements/Line';
export type { SvgProps } from './elements/Svg';
export type { PathProps } from './elements/Path';
export type { GProps } from './elements/G';
export type { TextProps } from './elements/Text';
export type { TSpanProps } from './elements/TSpan';
export type { TextPathProps } from './elements/TextPath';
export type { UseProps } from './elements/Use';
export type { ImageProps } from './elements/Image';
export type { SymbolProps } from './elements/Symbol';
export type { LinearGradientProps } from './elements/LinearGradient';
export type { RadialGradientProps } from './elements/RadialGradient';
export type { StopProps } from './elements/Stop';
export type { ClipPathProps } from './elements/ClipPath';
export type { PatternProps } from './elements/Pattern';
export type { MaskProps } from './elements/Mask';
export type { MarkerProps } from './elements/Marker';
export type { ForeignObjectProps } from './elements/ForeignObject';
export type { FilterProps } from './elements/filters/Filter';
export type { FeColorMatrixProps } from './elements/filters/FeColorMatrix';
export type { FeGaussianBlurProps } from './elements/filters/FeGaussianBlur';
export type { FeOffsetProps } from './elements/filters/FeOffset';
export type { FilterPrimitiveCommonProps } from './elements/filters/FilterPrimitive';

export * from './lib/extract/types';

export {
  Svg,
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  Marker,
  ForeignObject,
  parse,
  SvgAst,
  SvgFromUri,
  SvgFromXml,
  SvgUri,
  SvgXml,
  camelCase,
  fetchText,
  Shape,
  Filter,
  FeColorMatrix,
  FeGaussianBlur,
  FeOffset,
  RNSVGMarker,
  RNSVGMask,
  RNSVGPattern,
  RNSVGClipPath,
  RNSVGRadialGradient,
  RNSVGLinearGradient,
  RNSVGDefs,
  RNSVGSymbol,
  RNSVGImage,
  RNSVGUse,
  RNSVGTextPath,
  RNSVGTSpan,
  RNSVGText,
  RNSVGGroup,
  RNSVGPath,
  RNSVGLine,
  RNSVGEllipse,
  RNSVGCircle,
  RNSVGRect,
  RNSVGSvgAndroid,
  RNSVGSvgIOS,
  RNSVGForeignObject,
  RNSVGFilter,
  RNSVGFeColorMatrix,
  RNSVGFeGaussianBlur,
  RNSVGFeOffset,
};

export type {
  JsxAST,
  Middleware,
  Styles,
  UriProps,
  UriState,
  XmlAST,
  XmlProps,
  XmlState,
  AstProps,
};

export default Svg;
