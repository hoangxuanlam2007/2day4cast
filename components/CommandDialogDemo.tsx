"use client"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useEffect, useState } from "react"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"
import { DEFAULT_SUGGESTIONS as suggestions } from "@/lib/config"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useWeatherStore } from "@/lib/store"

export function CommandDialogDemo() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { setLatAndLng, setCity } = useWeatherStore()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "YOUR_CALLBACK_NAME",
    requestOptions: {
      types: ["(cities)"],
    },
    debounce: 300,
  })

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API by setting the second parameter to "false"
      setCity(description)
      setValue(description, false)

      setOpen(false)
      setValue("")
      clearSuggestions()

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0])
        setLatAndLng(lat.toString(), lng.toString())

        router.push(`/search?lat=${lat}&lon=${lng}`)
      })
    }

  return (
    <>
      <Button
        variant={"outline"}
        size={"lg"}
        onClick={() => setOpen(true)}
        className="h-9 w-full whitespace-nowrap px-4"
      >
        <p className="text-sm text-muted-foreground">
          Tìm kiếm thành phố...{" "}
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Tìm kiếm thành phố..."
          value={value}
          onValueChange={setValue}
          disabled={!ready}
        />
        <CommandList>
          <CommandEmpty>Không có kết quả.</CommandEmpty>
          <CommandGroup heading="Gợi ý">
            {!data.length && (
              <>
                {suggestions.map((suggestion, i) => (
                  <CommandItem key={i} onSelect={handleSelect(suggestion)}>
                    {suggestion.description}
                  </CommandItem>
                ))}
              </>
            )}
            {status === "OK" &&
              data.map((suggestion) => (
                <CommandItem
                  key={suggestion.place_id}
                  onSelect={handleSelect(suggestion)}
                >
                  {suggestion.description}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
