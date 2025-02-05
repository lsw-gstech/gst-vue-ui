import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import DialogService from 'primevue/dialogservice';
import ConfirmationService from 'primevue/confirmationservice';
import Tooltip from 'primevue/tooltip';
import Aura from '@primevue/themes/aura';

// PrimeVue 유틸리티
export { useToast } from 'primevue/usetoast';
export { useDialog } from 'primevue/usedialog';
export { useConfirm } from 'primevue/useconfirm';

// PrimeVue 컴포넌트들
import AutoComplete from 'primevue/autocomplete';
import DatePicker from 'primevue/datepicker';
import Checkbox from 'primevue/checkbox';
import ColorPicker from 'primevue/colorpicker';
import Select from 'primevue/select';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import ToggleSwitch from 'primevue/toggleswitch';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Textarea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import TreeSelect from 'primevue/treeselect';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import Popover from 'primevue/popover';
import Drawer from 'primevue/drawer';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import ContextMenu from 'primevue/contextmenu';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import Tabs from 'primevue/tabs';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';
import DynamicDialog from 'primevue/dynamicdialog';
import Tree from 'primevue/tree';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Tag from 'primevue/tag';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Skeleton from 'primevue/skeleton';
import ScrollTop from 'primevue/scrolltop';
import Divider from 'primevue/divider';

// PrimeVue 컴포넌트 매핑
const primeComponents = {
  AutoComplete,
  DatePicker,
  Checkbox,
  ColorPicker,
  Select,
  InputMask,
  InputNumber,
  ToggleSwitch,
  InputText,
  MultiSelect,
  Password,
  RadioButton,
  SelectButton,
  Slider,
  Textarea,
  ToggleButton,
  TreeSelect,
  Button,
  DataTable,
  Column,
  ColumnGroup,
  Row,
  Dialog,
  ConfirmDialog,
  ConfirmPopup,
  Popover,
  Drawer,
  Menu,
  Menubar,
  ContextMenu,
  Message,
  Toast,
  Tabs,
  TabPanel,
  Card,
  DynamicDialog,
  Tree,
  ProgressBar,
  ProgressSpinner,
  Tag,
  Badge,
  Avatar,
  AvatarGroup,
  Skeleton,
  ScrollTop,
  Divider,
} as const;

export default {
  install: (app: App, options = {}) => {
    // PrimeVue 설정
    app.use(PrimeVue as any, {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          prefix: 'gst',
          darkModeSelector: 'system',
        },
      },
      ...options,
    });

    // PrimeVue 서비스
    app.use(ToastService as any);
    app.use(DialogService as any);
    app.use(ConfirmationService as any);

    // 디렉티브
    app.directive('tooltip', Tooltip as any);

    // PrimeVue 컴포넌트 등록 (Gst prefix 추가)
    Object.entries(primeComponents).forEach(([name, component]) => {
      app.component(`Gst${name}`, component);
    });
  },
};
