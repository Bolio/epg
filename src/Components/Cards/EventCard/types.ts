export interface IEvent {
  channel_id: string;
  source_uri: string;
  id: string;
  name: string;
  description: string;
  talent: null | string;
  date_begin: string;
  date_end: string;
  unix_begin: number;
  unix_end: number;
  duration: string;
  language: string;
  type: string;
  group_id: null | string;
  confirmado: null | string;
  id_empleado: null | string;
  tms_id: null | string;
  event_alf_id: string;
  ext_ncont_id: string;
  ext_nevt_id: string;
  ext_actors: null | string;
  ext_director: null | string;
  ext_year: null | string;
  ext_country: null | string;
  ext_original_name: string;
  ext_ep_original_name: null | string;
  ext_series_id: string;
  ext_season_id: string;
  ext_episode_id: string;
  ext_language: string;
  ext_serie_short_desc: null | string;
  ext_serie_desc: null | string;
  image_base_horizontal: string;
  image_base_vertical: string;
  image_base_square: string;
  ext_eventimage_name: string;
  ext_eventimage_name_base: string;
  ext_catchup: string;
  ext_startover: string;
  ext_recordable: string;
  parental_rating: string;
  aud_stereo: string;
  aud_dolby: string;
  vid_black_and_white: string;
  dvb_content: null | string;
  user_content: null | string;
  group_rel: null | string;
  gmt: number;
}

export interface EventCardProps {
  event: IEvent;
}
