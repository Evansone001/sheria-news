
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


export const ComposablesLanguageSwitcher: typeof import("../app/components/composables/LanguageSwitcher.vue").default
export const ComposablesThemeToggle: typeof import("../app/components/composables/ThemeToggle.vue").default
export const FormsContactForm: typeof import("../app/components/forms/ContactForm.vue").default
export const FormsNewsLetterForm: typeof import("../app/components/forms/NewsLetterForm.vue").default
export const FormsSearchForm: typeof import("../app/components/forms/SearchForm.vue").default
export const IconsChevronIcon: typeof import("../app/components/icons/ChevronIcon.vue").default
export const IconsIconBase: typeof import("../app/components/icons/IconBase.vue").default
export const IconsMenuIcon: typeof import("../app/components/icons/MenuIcon.vue").default
export const IconsSearchIcon: typeof import("../app/components/icons/SearchIcon.vue").default
export const LayoutFooterAppFooter: typeof import("../app/components/layout/Footer/AppFooter.vue").default
export const LayoutFooterNewsletterSignup: typeof import("../app/components/layout/Footer/NewsletterSignup.vue").default
export const LayoutHeaderAppHeader: typeof import("../app/components/layout/Header/AppHeader.vue").default
export const LayoutHeaderLogo: typeof import("../app/components/layout/Header/Logo.vue").default
export const LayoutHeaderMobileMenu: typeof import("../app/components/layout/Header/MobileMenu.vue").default
export const LayoutHeaderNavigation: typeof import("../app/components/layout/Header/Navigation.vue").default
export const LayoutSidebarAppSidebar: typeof import("../app/components/layout/Sidebar/AppSidebar.vue").default
export const LayoutSidebarTableOfContents: typeof import("../app/components/layout/Sidebar/TableOfContents.vue").default
export const UiButtonsAppButton: typeof import("../app/components/ui/buttons/AppButton.vue").default
export const UiButtonsIconButton: typeof import("../app/components/ui/buttons/IconButton.vue").default
export const UiCardsCaseCard: typeof import("../app/components/ui/cards/CaseCard.vue").default
export const UiCardsNewsCard: typeof import("../app/components/ui/cards/NewsCard.vue").default
export const UiCardsStartCard: typeof import("../app/components/ui/cards/StartCard.vue").default
export const UiDataTable: typeof import("../app/components/ui/data/DataTable.vue").default
export const UiDataStatsGrid: typeof import("../app/components/ui/data/StatsGrid.vue").default
export const UiDataTimeline: typeof import("../app/components/ui/data/Timeline.vue").default
export const UiFeedbackAppAlert: typeof import("../app/components/ui/feedback/AppAlert.vue").default
export const UiFeedbackAppLoader: typeof import("../app/components/ui/feedback/AppLoader.vue").default
export const UiFeedbackEmptyState: typeof import("../app/components/ui/feedback/EmptyState.vue").default
export const UiInputsAppInput: typeof import("../app/components/ui/inputs/AppInput.vue").default
export const UiInputsAppSelect: typeof import("../app/components/ui/inputs/AppSelect.vue").default
export const UiInputsSearchInput: typeof import("../app/components/ui/inputs/SearchInput.vue").default
export const UiLayoutContainer: typeof import("../app/components/ui/layout/Container.vue").default
export const UiLayoutGrid: typeof import("../app/components/ui/layout/Grid.vue").default
export const UiLayoutSection: typeof import("../app/components/ui/layout/Section.vue").default
export const UiNavigationAppPagination: typeof import("../app/components/ui/navigation/AppPagination.vue").default
export const UiNavigationBreadcrumbs: typeof import("../app/components/ui/navigation/Breadcrumbs.vue").default
export const UiNavigationSideBarnav: typeof import("../app/components/ui/navigation/SideBarnav.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyComposablesLanguageSwitcher: LazyComponent<typeof import("../app/components/composables/LanguageSwitcher.vue").default>
export const LazyComposablesThemeToggle: LazyComponent<typeof import("../app/components/composables/ThemeToggle.vue").default>
export const LazyFormsContactForm: LazyComponent<typeof import("../app/components/forms/ContactForm.vue").default>
export const LazyFormsNewsLetterForm: LazyComponent<typeof import("../app/components/forms/NewsLetterForm.vue").default>
export const LazyFormsSearchForm: LazyComponent<typeof import("../app/components/forms/SearchForm.vue").default>
export const LazyIconsChevronIcon: LazyComponent<typeof import("../app/components/icons/ChevronIcon.vue").default>
export const LazyIconsIconBase: LazyComponent<typeof import("../app/components/icons/IconBase.vue").default>
export const LazyIconsMenuIcon: LazyComponent<typeof import("../app/components/icons/MenuIcon.vue").default>
export const LazyIconsSearchIcon: LazyComponent<typeof import("../app/components/icons/SearchIcon.vue").default>
export const LazyLayoutFooterAppFooter: LazyComponent<typeof import("../app/components/layout/Footer/AppFooter.vue").default>
export const LazyLayoutFooterNewsletterSignup: LazyComponent<typeof import("../app/components/layout/Footer/NewsletterSignup.vue").default>
export const LazyLayoutHeaderAppHeader: LazyComponent<typeof import("../app/components/layout/Header/AppHeader.vue").default>
export const LazyLayoutHeaderLogo: LazyComponent<typeof import("../app/components/layout/Header/Logo.vue").default>
export const LazyLayoutHeaderMobileMenu: LazyComponent<typeof import("../app/components/layout/Header/MobileMenu.vue").default>
export const LazyLayoutHeaderNavigation: LazyComponent<typeof import("../app/components/layout/Header/Navigation.vue").default>
export const LazyLayoutSidebarAppSidebar: LazyComponent<typeof import("../app/components/layout/Sidebar/AppSidebar.vue").default>
export const LazyLayoutSidebarTableOfContents: LazyComponent<typeof import("../app/components/layout/Sidebar/TableOfContents.vue").default>
export const LazyUiButtonsAppButton: LazyComponent<typeof import("../app/components/ui/buttons/AppButton.vue").default>
export const LazyUiButtonsIconButton: LazyComponent<typeof import("../app/components/ui/buttons/IconButton.vue").default>
export const LazyUiCardsCaseCard: LazyComponent<typeof import("../app/components/ui/cards/CaseCard.vue").default>
export const LazyUiCardsNewsCard: LazyComponent<typeof import("../app/components/ui/cards/NewsCard.vue").default>
export const LazyUiCardsStartCard: LazyComponent<typeof import("../app/components/ui/cards/StartCard.vue").default>
export const LazyUiDataTable: LazyComponent<typeof import("../app/components/ui/data/DataTable.vue").default>
export const LazyUiDataStatsGrid: LazyComponent<typeof import("../app/components/ui/data/StatsGrid.vue").default>
export const LazyUiDataTimeline: LazyComponent<typeof import("../app/components/ui/data/Timeline.vue").default>
export const LazyUiFeedbackAppAlert: LazyComponent<typeof import("../app/components/ui/feedback/AppAlert.vue").default>
export const LazyUiFeedbackAppLoader: LazyComponent<typeof import("../app/components/ui/feedback/AppLoader.vue").default>
export const LazyUiFeedbackEmptyState: LazyComponent<typeof import("../app/components/ui/feedback/EmptyState.vue").default>
export const LazyUiInputsAppInput: LazyComponent<typeof import("../app/components/ui/inputs/AppInput.vue").default>
export const LazyUiInputsAppSelect: LazyComponent<typeof import("../app/components/ui/inputs/AppSelect.vue").default>
export const LazyUiInputsSearchInput: LazyComponent<typeof import("../app/components/ui/inputs/SearchInput.vue").default>
export const LazyUiLayoutContainer: LazyComponent<typeof import("../app/components/ui/layout/Container.vue").default>
export const LazyUiLayoutGrid: LazyComponent<typeof import("../app/components/ui/layout/Grid.vue").default>
export const LazyUiLayoutSection: LazyComponent<typeof import("../app/components/ui/layout/Section.vue").default>
export const LazyUiNavigationAppPagination: LazyComponent<typeof import("../app/components/ui/navigation/AppPagination.vue").default>
export const LazyUiNavigationBreadcrumbs: LazyComponent<typeof import("../app/components/ui/navigation/Breadcrumbs.vue").default>
export const LazyUiNavigationSideBarnav: LazyComponent<typeof import("../app/components/ui/navigation/SideBarnav.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
