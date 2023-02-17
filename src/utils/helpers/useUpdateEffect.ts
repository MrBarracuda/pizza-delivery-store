import { useEffect } from 'react'

import { useIsFirstRender } from './useIsFirstRender'

import type { DependencyList, EffectCallback } from 'react'

export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useIsFirstRender()

  useEffect(() => {
    if (!isFirst) {
      return effect()
    }
  }, deps)
}
