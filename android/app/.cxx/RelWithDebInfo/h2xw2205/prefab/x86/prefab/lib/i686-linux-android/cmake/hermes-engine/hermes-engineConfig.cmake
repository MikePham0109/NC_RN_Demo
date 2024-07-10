if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/mikepham/.gradle/caches/transforms-4/1c6f4f880e2551afbb37a7755f78d1c3/transformed/jetified-hermes-android-0.73.8-release/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/mikepham/.gradle/caches/transforms-4/1c6f4f880e2551afbb37a7755f78d1c3/transformed/jetified-hermes-android-0.73.8-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

