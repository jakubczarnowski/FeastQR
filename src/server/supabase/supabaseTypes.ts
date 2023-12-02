export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          id: string
          menu_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          menu_id: string
        }
        Update: {
          created_at?: string
          id?: string
          menu_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_menu_id_fkey"
            columns: ["menu_id"]
            referencedRelation: "menus"
            referencedColumns: ["id"]
          }
        ]
      }
      categories_translation: {
        Row: {
          category_id: string
          language_id: string
          name: string
        }
        Insert: {
          category_id: string
          language_id: string
          name: string
        }
        Update: {
          category_id?: string
          language_id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_translation_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_translation_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          }
        ]
      }
      dish_variants: {
        Row: {
          created_at: string | null
          dish_id: string
          id: string
          price: number | null
        }
        Insert: {
          created_at?: string | null
          dish_id: string
          id?: string
          price?: number | null
        }
        Update: {
          created_at?: string | null
          dish_id?: string
          id?: string
          price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dish_variants_dish_id_fkey"
            columns: ["dish_id"]
            referencedRelation: "dishes"
            referencedColumns: ["id"]
          }
        ]
      }
      dishes: {
        Row: {
          calories: number | null
          carbohydrates: number | null
          category_id: string | null
          created_at: string
          fats: number | null
          id: string
          menu_id: string
          picture_url: string | null
          price: number
          protein: number | null
          weight: number | null
        }
        Insert: {
          calories?: number | null
          carbohydrates?: number | null
          category_id?: string | null
          created_at?: string
          fats?: number | null
          id?: string
          menu_id: string
          picture_url?: string | null
          price: number
          protein?: number | null
          weight?: number | null
        }
        Update: {
          calories?: number | null
          carbohydrates?: number | null
          category_id?: string | null
          created_at?: string
          fats?: number | null
          id?: string
          menu_id?: string
          picture_url?: string | null
          price?: number
          protein?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dishes_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dishes_menu_id_fkey"
            columns: ["menu_id"]
            referencedRelation: "menus"
            referencedColumns: ["id"]
          }
        ]
      }
      dishes_tag: {
        Row: {
          dish_id: string | null
          tag_name: Database["public"]["Enums"]["tag_type"]
        }
        Insert: {
          dish_id?: string | null
          tag_name: Database["public"]["Enums"]["tag_type"]
        }
        Update: {
          dish_id?: string | null
          tag_name?: Database["public"]["Enums"]["tag_type"]
        }
        Relationships: [
          {
            foreignKeyName: "dishes_tag_dish_id_fkey"
            columns: ["dish_id"]
            referencedRelation: "dishes"
            referencedColumns: ["id"]
          }
        ]
      }
      dishes_translation: {
        Row: {
          description: string | null
          dish_id: string
          language_id: string
          name: string
        }
        Insert: {
          description?: string | null
          dish_id: string
          language_id: string
          name: string
        }
        Update: {
          description?: string | null
          dish_id?: string
          language_id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "dishes_translation_dish_id_fkey"
            columns: ["dish_id"]
            referencedRelation: "dishes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dishes_translation_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          }
        ]
      }
      languages: {
        Row: {
          flag_url: string
          id: string
          iso_code: string
          name: string
        }
        Insert: {
          flag_url?: string
          id?: string
          iso_code: string
          name: string
        }
        Update: {
          flag_url?: string
          id?: string
          iso_code?: string
          name?: string
        }
        Relationships: []
      }
      menu_languages: {
        Row: {
          is_default: boolean
          language_id: string
          menu_id: string
        }
        Insert: {
          is_default?: boolean
          language_id: string
          menu_id: string
        }
        Update: {
          is_default?: boolean
          language_id?: string
          menu_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "menu_languages_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menu_languages_menu_id_fkey"
            columns: ["menu_id"]
            referencedRelation: "menus"
            referencedColumns: ["id"]
          }
        ]
      }
      menus: {
        Row: {
          address: string
          background_image_url: string | null
          city: string
          contact_number: string | null
          created_at: string
          facebook_url: string | null
          google_review_url: string | null
          id: string
          instagram_url: string | null
          is_published: boolean
          logo_image_url: string | null
          name: string
          slug: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          background_image_url?: string | null
          city: string
          contact_number?: string | null
          created_at?: string
          facebook_url?: string | null
          google_review_url?: string | null
          id?: string
          instagram_url?: string | null
          is_published?: boolean
          logo_image_url?: string | null
          name: string
          slug: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          background_image_url?: string | null
          city?: string
          contact_number?: string | null
          created_at?: string
          facebook_url?: string | null
          google_review_url?: string | null
          id?: string
          instagram_url?: string | null
          is_published?: boolean
          logo_image_url?: string | null
          name?: string
          slug?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "menus_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          email: string
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          email: string
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      subscriptions: {
        Row: {
          created_at: string | null
          ends_at: string | null
          json_data: Json
          lemon_squeezy_id: string
          profile_id: string
          renews_at: string
          status: string
          update_payment_url: string
        }
        Insert: {
          created_at?: string | null
          ends_at?: string | null
          json_data: Json
          lemon_squeezy_id: string
          profile_id: string
          renews_at: string
          status: string
          update_payment_url: string
        }
        Update: {
          created_at?: string | null
          ends_at?: string | null
          json_data?: Json
          lemon_squeezy_id?: string
          profile_id?: string
          renews_at?: string
          status?: string
          update_payment_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      variant_translations: {
        Row: {
          description: string | null
          dish_variant_id: string
          language_id: string
          name: string
        }
        Insert: {
          description?: string | null
          dish_variant_id: string
          language_id: string
          name: string
        }
        Update: {
          description?: string | null
          dish_variant_id?: string
          language_id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "variant_translations_dish_variant_id_fkey"
            columns: ["dish_variant_id"]
            referencedRelation: "dish_variants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "variant_translations_language_id_fkey"
            columns: ["language_id"]
            referencedRelation: "languages"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      continents:
        | "Africa"
        | "Antarctica"
        | "Asia"
        | "Europe"
        | "Oceania"
        | "North America"
        | "South America"
      tag_type:
        | "keto"
        | "vegan"
        | "vegetarian"
        | "low_carb"
        | "sugar_free"
        | "low_fat"
        | "high_protein"
        | "high_fiber"
        | "organic"
        | "gluten_free"
        | "lactose_free"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

