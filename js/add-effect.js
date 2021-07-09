const SLIDER_ELEMENT = document.querySelector('.effect-level__slider');
const SLIDER_VALUE = document.querySelector('.effect-level__value');
const EFFECT_LEVEL = document.querySelector('.effect-level');
const IMAGE_PREVIEW = document.querySelector('.img-upload__preview');

EFFECT_LEVEL.style.display = 'none';

noUiSlider.create(SLIDER_ELEMENT, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

const effectsSettingList = {
  chrome: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    className: 'effects__preview--chrome',
    filterName: 'grayscale',
    unit: '',
  },
  sepia: {
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    className: 'effects__preview--sepia',
    filterName: 'sepia',
    unit: '',
  },
  marvin: {
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    className: 'effects__preview--marvin',
    filterName: 'invert',
    unit: '%',
  },
  phobos: {
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    className: 'effects__preview--phobos',
    filterName: 'blur',
    unit: 'px',
  },
  heat: {
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    className: 'effects__preview--heat',
    filterName: 'brightness',
    unit: '',
  },
  none: {
    className: ['effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'],
    filterName: 'unset',
  },
};

function checkEffect (effect) {
  if (effect === 'none') {
    IMAGE_PREVIEW.classList.remove(effectsSettingList[effect].className);
    IMAGE_PREVIEW.style.filter = effectsSettingList[effect].filterName;
    SLIDER_VALUE.valur = '';
  } else {
    SLIDER_ELEMENT.noUiSlider.updateOptions({
      range: {
        min: effectsSettingList[effect].min,
        max: effectsSettingList[effect].max,
      },
      start: effectsSettingList[effect].start,
      step: effectsSettingList[effect].step,
    });
    IMAGE_PREVIEW.classList.add('effectsSettingList[effect].className');
    effectsSettingList.noUiSlider.on('update', (_, handle, unencoded) => {
      IMAGE_PREVIEW.style.filter = `${effectsSettingList[effect].filterName}(${unencoded[handle]}${effectsSettingList[effect].unit})`;
    });
  }
}

function addEffect(evt) {
  const effectName = evt.target.value;
  EFFECT_LEVEL.style.display = 'none';
  EFFECT_LEVEL.style.display = effectName !== 'none' ? 'block' : 'none';
  checkEffect(effectName);
}

function dropEffect() {
  IMAGE_PREVIEW.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
  IMAGE_PREVIEW.style.filter = 'unset';
  SLIDER_VALUE.value = '';
  EFFECT_LEVEL.style.display = 'none';
  document.querySelector('#effect-none').checked = true;
}

export {addEffect, dropEffect};
