
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'ComposablesLanguageSwitcher': typeof import("../../app/components/composables/LanguageSwitcher.vue").default
  'ComposablesThemeToggle': typeof import("../../app/components/composables/ThemeToggle.vue").default
  'FormsContactForm': typeof import("../../app/components/forms/ContactForm.vue").default
  'FormsNewsLetterForm': typeof import("../../app/components/forms/NewsLetterForm.vue").default
  'FormsSearchForm': typeof import("../../app/components/forms/SearchForm.vue").default
  'IconsChevronIcon': typeof import("../../app/components/icons/ChevronIcon.vue").default
  'IconsIconBase': typeof import("../../app/components/icons/IconBase.vue").default
  'IconsMenuIcon': typeof import("../../app/components/icons/MenuIcon.vue").default
  'IconsSearchIcon': typeof import("../../app/components/icons/SearchIcon.vue").default
  'LayoutFooterAppFooter': typeof import("../../app/components/layout/Footer/AppFooter.vue").default
  'LayoutFooterNewsletterSignup': typeof import("../../app/components/layout/Footer/NewsletterSignup.vue").default
  'LayoutHeaderAppHeader': typeof import("../../app/components/layout/Header/AppHeader.vue").default
  'LayoutHeaderLogo': typeof import("../../app/components/layout/Header/Logo.vue").default
  'LayoutHeaderMobileMenu': typeof import("../../app/components/layout/Header/MobileMenu.vue").default
  'LayoutHeaderNavigation': typeof import("../../app/components/layout/Header/Navigation.vue").default
  'LayoutSidebarAppSidebar': typeof import("../../app/components/layout/Sidebar/AppSidebar.vue").default
  'LayoutSidebarTableOfContents': typeof import("../../app/components/layout/Sidebar/TableOfContents.vue").default
  'UiButtonsAppButton': typeof import("../../app/components/ui/buttons/AppButton.vue").default
  'UiButtonsIconButton': typeof import("../../app/components/ui/buttons/IconButton.vue").default
  'UiCardsCaseCard': typeof import("../../app/components/ui/cards/CaseCard.vue").default
  'UiCardsNewsCard': typeof import("../../app/components/ui/cards/NewsCard.vue").default
  'UiCardsStartCard': typeof import("../../app/components/ui/cards/StartCard.vue").default
  'UiDataTable': typeof import("../../app/components/ui/data/DataTable.vue").default
  'UiDataStatsGrid': typeof import("../../app/components/ui/data/StatsGrid.vue").default
  'UiDataTimeline': typeof import("../../app/components/ui/data/Timeline.vue").default
  'UiFeedbackAppAlert': typeof import("../../app/components/ui/feedback/AppAlert.vue").default
  'UiFeedbackAppLoader': typeof import("../../app/components/ui/feedback/AppLoader.vue").default
  'UiFeedbackEmptyState': typeof import("../../app/components/ui/feedback/EmptyState.vue").default
  'UiInputsAppInput': typeof import("../../app/components/ui/inputs/AppInput.vue").default
  'UiInputsAppSelect': typeof import("../../app/components/ui/inputs/AppSelect.vue").default
  'UiInputsSearchInput': typeof import("../../app/components/ui/inputs/SearchInput.vue").default
  'UiLayoutContainer': typeof import("../../app/components/ui/layout/Container.vue").default
  'UiLayoutGrid': typeof import("../../app/components/ui/layout/Grid.vue").default
  'UiLayoutSection': typeof import("../../app/components/ui/layout/Section.vue").default
  'UiNavigationAppPagination': typeof import("../../app/components/ui/navigation/AppPagination.vue").default
  'UiNavigationBreadcrumbs': typeof import("../../app/components/ui/navigation/Breadcrumbs.vue").default
  'UiNavigationSideBarnav': typeof import("../../app/components/ui/navigation/SideBarnav.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyComposablesLanguageSwitcher': LazyComponent<typeof import("../../app/components/composables/LanguageSwitcher.vue").default>
  'LazyComposablesThemeToggle': LazyComponent<typeof import("../../app/components/composables/ThemeToggle.vue").default>
  'LazyFormsContactForm': LazyComponent<typeof import("../../app/components/forms/ContactForm.vue").default>
  'LazyFormsNewsLetterForm': LazyComponent<typeof import("../../app/components/forms/NewsLetterForm.vue").default>
  'LazyFormsSearchForm': LazyComponent<typeof import("../../app/components/forms/SearchForm.vue").default>
  'LazyIconsChevronIcon': LazyComponent<typeof import("../../app/components/icons/ChevronIcon.vue").default>
  'LazyIconsIconBase': LazyComponent<typeof import("../../app/components/icons/IconBase.vue").default>
  'LazyIconsMenuIcon': LazyComponent<typeof import("../../app/components/icons/MenuIcon.vue").default>
  'LazyIconsSearchIcon': LazyComponent<typeof import("../../app/components/icons/SearchIcon.vue").default>
  'LazyLayoutFooterAppFooter': LazyComponent<typeof import("../../app/components/layout/Footer/AppFooter.vue").default>
  'LazyLayoutFooterNewsletterSignup': LazyComponent<typeof import("../../app/components/layout/Footer/NewsletterSignup.vue").default>
  'LazyLayoutHeaderAppHeader': LazyComponent<typeof import("../../app/components/layout/Header/AppHeader.vue").default>
  'LazyLayoutHeaderLogo': LazyComponent<typeof import("../../app/components/layout/Header/Logo.vue").default>
  'LazyLayoutHeaderMobileMenu': LazyComponent<typeof import("../../app/components/layout/Header/MobileMenu.vue").default>
  'LazyLayoutHeaderNavigation': LazyComponent<typeof import("../../app/components/layout/Header/Navigation.vue").default>
  'LazyLayoutSidebarAppSidebar': LazyComponent<typeof import("../../app/components/layout/Sidebar/AppSidebar.vue").default>
  'LazyLayoutSidebarTableOfContents': LazyComponent<typeof import("../../app/components/layout/Sidebar/TableOfContents.vue").default>
  'LazyUiButtonsAppButton': LazyComponent<typeof import("../../app/components/ui/buttons/AppButton.vue").default>
  'LazyUiButtonsIconButton': LazyComponent<typeof import("../../app/components/ui/buttons/IconButton.vue").default>
  'LazyUiCardsCaseCard': LazyComponent<typeof import("../../app/components/ui/cards/CaseCard.vue").default>
  'LazyUiCardsNewsCard': LazyComponent<typeof import("../../app/components/ui/cards/NewsCard.vue").default>
  'LazyUiCardsStartCard': LazyComponent<typeof import("../../app/components/ui/cards/StartCard.vue").default>
  'LazyUiDataTable': LazyComponent<typeof import("../../app/components/ui/data/DataTable.vue").default>
  'LazyUiDataStatsGrid': LazyComponent<typeof import("../../app/components/ui/data/StatsGrid.vue").default>
  'LazyUiDataTimeline': LazyComponent<typeof import("../../app/components/ui/data/Timeline.vue").default>
  'LazyUiFeedbackAppAlert': LazyComponent<typeof import("../../app/components/ui/feedback/AppAlert.vue").default>
  'LazyUiFeedbackAppLoader': LazyComponent<typeof import("../../app/components/ui/feedback/AppLoader.vue").default>
  'LazyUiFeedbackEmptyState': LazyComponent<typeof import("../../app/components/ui/feedback/EmptyState.vue").default>
  'LazyUiInputsAppInput': LazyComponent<typeof import("../../app/components/ui/inputs/AppInput.vue").default>
  'LazyUiInputsAppSelect': LazyComponent<typeof import("../../app/components/ui/inputs/AppSelect.vue").default>
  'LazyUiInputsSearchInput': LazyComponent<typeof import("../../app/components/ui/inputs/SearchInput.vue").default>
  'LazyUiLayoutContainer': LazyComponent<typeof import("../../app/components/ui/layout/Container.vue").default>
  'LazyUiLayoutGrid': LazyComponent<typeof import("../../app/components/ui/layout/Grid.vue").default>
  'LazyUiLayoutSection': LazyComponent<typeof import("../../app/components/ui/layout/Section.vue").default>
  'LazyUiNavigationAppPagination': LazyComponent<typeof import("../../app/components/ui/navigation/AppPagination.vue").default>
  'LazyUiNavigationBreadcrumbs': LazyComponent<typeof import("../../app/components/ui/navigation/Breadcrumbs.vue").default>
  'LazyUiNavigationSideBarnav': LazyComponent<typeof import("../../app/components/ui/navigation/SideBarnav.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
